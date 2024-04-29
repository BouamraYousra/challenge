from tortoise.models import Model
from tortoise import fields
from tortoise.contrib.pydantic import pydantic_model_creator

class Task(Model):
    id = fields.IntField(pk=True)
    content = fields.CharField(max_length=100, nullable=False)
    state = fields.BooleanField(default=True)

# Create Pydantic models for Task
task_pydantic = pydantic_model_creator(Task, name="Task")
task_pydanticIn = pydantic_model_creator(Task, name="TaskIn", exclude_readonly=True)
