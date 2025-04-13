FROM mongo:6.0

COPY init/ /docker-entrypoint-initdb.d/

EXPOSE 27017
