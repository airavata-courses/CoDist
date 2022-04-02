FROM python:3.8
FROM continuumio/miniconda3

#  set the working directory in the container
WORKDIR /app

# copy the dependencies file to the working directory
# COPY requirements.txt .

# COPY environment.yml .

COPY . .

COPY environment.yml .

COPY example.env .env

RUN conda env create -f environment.yml

RUN conda init bash

RUN echo "conda activate myplotenv" > ~/.bashrc

# RUN chmod +x ./install_dependenices.sh
# RUN ./install_dependenices.sh

RUN pip install -r requirements.txt && conda install -c conda-forge cartopy

# RUN flask run
CMD [ "python", "consumer.py"]

