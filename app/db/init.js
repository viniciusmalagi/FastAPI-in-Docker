var cars = [
    {
        "id": 1,
        "make": "chevrolet",
        "model": "chevette",
        "transmission": "m",
        "year": 1985
    },
    {
        "id": 2,
        "make": "chevrolet",
        "model": "camaro",
        "transmission": "m",
        "year": 1994
    },
    {
        "id": 3,
        "make": "bmw",
        "model": "320i xdrive",
        "transmission": "a",
        "year": 2013
    },
    {
        "id": 4,
        "make": "volkswagen",
        "model": "golf gti",
        "transmission": "m",
        "year": 1993
    },
    {
        "id": 5,
        "make": "ford",
        "model": "mustang",
        "transmission": "m",
        "year": 1994
    }
]
db = db.getSiblingDB('cars_db');
db.createCollection('cars_tb');
db.cars_tb.insertMany(cars);