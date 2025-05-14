# Use an official Python runtime as a parent image
FROM python:3.10-slim

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container at /app
# Make sure requirements.txt is in the Project_Base directory
COPY ./requirements.txt /app/requirements.txt

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir --upgrade pip && \
    pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container at /app
COPY . /app

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Define environment variable for Uvicorn
ENV PORT=8000
ENV HOST="0.0.0.0"

# Run uvicorn when the container launches
# Use the app module from app/__init__.py
CMD ["uvicorn", "app:app", "--host", "0.0.0.0", "--port", "8000"]