#pip install fastapi uvicorn tortoise-orm[mysql] aiomysql

from fastapi import FastAPI
from tortoise.contrib.fastapi import register_tortoise
from tests.models import * 


app = FastAPI()
db_url = "mysql://root:SBlLPuQDkfbdOIoEYaEHWJVYBKQOZcAb@roundhouse.proxy.rlwy.net:32059/railway"


@app.get('/')
def index():
    return {"Msg": "go to /docs for api or /redoc"}


@app.post('/task')
async def add_task(task_info:task_pydanticIn):
    task_obj=await Task.create(**task_info.dict(exclude_unset=True))
    response= await task_pydantic.from_tortoise_orm(task_obj)
    return {"status":"ok","data":response} 


@app.get('/task')
async def get_all_tasks():
    response=await task_pydantic.from_queryset(Task.all())
    return {"status":"ok","data":response} 

@app.get('/task/{task_id}')
async def get_specific_task(task_id: int):
    response=await task_pydantic.from_queryset_single(Task.get(id=task_id))
    return {"status":"ok","data":response} 


@app.put('/task/{task_id}')
async def update_task(task_id: int,update_info:task_pydanticIn):
    task =await Task.get(id=task_id)
    update_info=update_info.dict(exclude_unset=True)
    task.content=update_info['content']
    task.state=update_info['state']
    await task.save()
    response=task_pydantic.from_tortoise_orm(task)
    return {"status":"ok","data":response} 

@app.delete('/task/{task_id}')
async def delete_task(task_id:int):
    await Task.get(id=task_id).delete()
    return {"status":"ok"} 

    

register_tortoise(
    app,
    db_url=db_url,
    modules={"models": ["tests.models"]},
    generate_schemas=True,
    add_exception_handlers=True
)