import os
import sys
import json
import pandas as pd
import numpy as np
import request

from pandas import DataFrame, Series

if (len(sys.argv) > 1):
    index_to_update = sys.argv[1]
else: index_to_update = "restaurants"

# filename, file_extension = os.path.splitext(file_to_index)

file_path = ("%(dir)s/../resources/dataset/" % {"dir": os.path.dirname(os.path.realpath(__file__))})

batch = []

def custom_clean_JSON_func(cleanDFrame):
    d = [ 
        dict([
            (colname, row[i]) for i, colname in enumerate(df.columns)
        ])
        for row in df.values
    ]
    return d

# batch all files from resource dataset directory and inject them to restaurants index in one API call

for subdir, dirs, files in os.walk(file_path):
    for file in files:
        path = os.path.join(subdir, file)
        name, ext = os.path.splitext(file)
        if ext == ".csv": 
            df = pd.read_csv(path, sep=";", header=0, engine="python")
            df.dropna
            df["five_stars"] = np.where(df["stars_count"]>=4.5, True, False)

            d = custom_clean_JSON_func(df)

            for row in d:
                assert type(row["stars_count"]) == float, "stars_count must be float"
                assert type(row["objectID"]) == int, "objectID must be int"
                assert type(row["reviews_count"]) == int, "reviews_count must be int"
                assert type(row["neighborhood"]) == str, "neighborhood must be str"
                assert type(row["food_type"]) == str, "food_type must be str"
                assert type(row["phone_number"]) == str, "phone_number must be str"
                assert type(row["price_range"]) == str, "price_range must be str"
                assert type(row["dining_style"]) == str, "dining_style must be str"
                assert type(row["five_stars"]) == bool, "four_stars must be bool"

                batch.append({
                    "action": "partialUpdateObject",
                    "body": row
                })

        elif ext == ".json":
            df = pd.read_json(path)
            df.dropna

            d = custom_clean_JSON_func(df)

            for row in d:
                
                clean_pay_options = set([ 
                    payment_option
                    if payment_option != "Diners Club" and payment_option != "Carte Blanche"
                    else "Discover"
                    for payment_option in row["payment_options"]])

                clean_pay_options.discard("JCB")
                clean_pay_options.discard("Pay with OpenTable")
                clean_pay_options.discard("Cash Only")

                row["payment_options"] = list(clean_pay_options)

                assert type(row["objectID"]) == int, "objectID must be int"
                assert type(row["city"]) == str, "city must be str"
                assert type(row["image_url"]) == str, "image_url must be str"
                assert type(row["state"]) == str, "state must be str"
                assert type(row["area"]) == str, "area must be str"
                assert type(row["mobile_reserve_url"]) == str, "mobile_reserve_url must be str"
                assert type(row["postal_code"]) == str, "postal_code must be str"
                assert type(row["address"]) == str, "address must be str"
                assert type(row["phone"]) == str, "phone must be str"
                assert type(row["country"]) == str, "country must be str"
                assert type(row["_geoloc"]) == dict, "_geloc must be dict"
                assert type(row["reserve_url"]) == str, "reserve_url must be str"
                assert type(row["name"]) == str, "name must be str"
                assert type(row["price"]) == int, "price must be int"
                assert type(row["payment_options"]) == list, "payment_options must be list"
                
                batch.append({
                    "action": "partialUpdateObject",
                    "body": row
                })

payload = dict()
payload["requests"] = batch
payload = json.dumps(payload)

assert type(payload) == str

dispatch = request.batch(index_to_update, payload)


# objectID city image_url state area mobile_reserve_url postal_code address 
# phone country _geoloc reserve_url name price payment_options

# objectID food_type  stars_count  reviews_count    neighborhood
# phone_number    price_range   dining_style

# print("objectID", df["objectID"].unique())
# print("reviews_count", df["reviews_count"].unique())
# print("neighborhood", df["neighborhood"].unique())
# print("food_type", df["food_type"].unique())
# print("phone_number", df["phone_number"].unique())
# print("price_range", df["price_range"].unique())
# print("dining_style", df["dining_style"].unique())
# print("stars_count", df["stars_count"].unique())
# print("four_stars", df["four_stars"].unique())