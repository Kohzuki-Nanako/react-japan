import json

import json

data_path = './public/data/data.json'

normalized_data_path = './public/data/normalized_data.json'

keys = [
    "米",
    "牛乳",
    "肉用牛",
    "豚",
    "鶏卵",
    "ブロイラー",
    "トマト",
    "乳牛",
    "いちご",
    "火力",
    "水力",
    "風力",
    "原子力",
    "太陽光",
    "地熱",
    "国内線乗降客数",
    "Youtube登録者数",
    "Youtube最高再生数",
    "Twitterフォロワー数",
    "Twitterツイート数",
    "Twitter開始年月",
    "外国人訪問率",
    "芸能人",
]

max_values = {
    "米": 0,
    "牛乳": 0,
    "肉用牛": 0,
    "豚": 0,
    "鶏卵": 0,
    "ブロイラー": 0,
    "トマト": 0,
    "乳牛": 0,
    "いちご": 0,
    "火力": 0,
    "水力": 0,
    "風力": 0,
    "原子力": 0,
    "太陽光": 0,
    "地熱": 0,
    "国内線乗降客数": 0,
    "Youtube登録者数": 0,
    "Youtube最高再生数": 0,
    "Twitterフォロワー数": 0,
    "Twitterツイート数": 0,
    "Twitter開始年月": 0,
    "外国人訪問率": 0,
    "芸能人": 0,
}

min_values = {
    "米": float('inf'),
    "牛乳": float('inf'),
    "肉用牛": float('inf'),
    "豚": float('inf'),
    "鶏卵": float('inf'),
    "ブロイラー": float('inf'),
    "トマト": float('inf'),
    "乳牛": float('inf'),
    "いちご": float('inf'),
    "火力": float('inf'),
    "水力": float('inf'),
    "風力": float('inf'),
    "原子力": float('inf'),
    "太陽光": float('inf'),
    "地熱": float('inf'),
    "国内線乗降客数": float('inf'),
    "Youtube登録者数": float('inf'),
    "Youtube最高再生数": float('inf'),
    "Twitterフォロワー数": float('inf'),
    "Twitterツイート数": float('inf'),
    "Twitter開始年月": float('inf'),
    "外国人訪問率": float('inf'),
    "芸能人": float('inf'),
}

with open(data_path, encoding="UTF-8", mode='r') as f_r:
    data = json.load(f_r)['data']

    for d in data:
        for key in keys:
            d[key] = float(d[key].replace(',', '', 5))
        d["緯度"] = float(d["緯度"].replace(',', '', 5))
        d["経度"] = float(d["経度"].replace(',', '', 5))

    for d in data:
        for key in keys:
            if max_values[key] < d[key]:
                max_values[key] = d[key]
            if d[key] < min_values[key]:
                min_values[key] = d[key]

    for d in data:
        for key in keys:
            d[key] = {"value": d[key], "normalizedValue": 0 if max_values[key] == 0 else (
                d[key] - min_values[key]) / (max_values[key] - min_values[key])}

    with open(normalized_data_path, encoding="UTF-8", mode='w') as f_w:
        f_w.write(json.dumps({"data": data}, ensure_ascii=False))
