from fastapi import FastAPI
from fastapi import Response
from pymongo import MongoClient
import json

app = FastAPI()
db_connection = MongoClient("mongo", username='root', password='root',authSource='admin')
db =  db_connection["cars_db"]

def do_response(data: object) -> str:
    content_cars = [{"id": car["id"], "make": car["make"], "transmission": car["transmission"], "year": car["year"]} for car in data]
    response = {"cars": content_cars}
    return Response(content= json.dumps(response), media_type="application/json")

@app.get("/cars")
async def get_all_cars():
    cars = db.cars_tb.find()
    return do_response(cars)

@app.get("/cars/{car_id}")
async def read_cars(car_id: int):
    cars = db.cars_tb.find({"id": car_id})
    return do_response(cars)
