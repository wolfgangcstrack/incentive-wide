IMAGE_NAME='incentive-wide/mongo_db'
CONTAINER_NAME='incentive_wide_mongo_db'
MONGO_PORT=${MONGO_PORT:-27017}

if [[ -z "$(docker images | grep $IMAGE_NAME)" ]]; then
  docker build -t $IMAGE_NAME .
fi


if [[ -z "$(docker ps -a | grep $CONTAINER_NAME)" ]]; then
  docker create --name $CONTAINER_NAME -p ${MONGO_PORT}:${MONGO_PORT} $IMAGE_NAME
fi

docker start $CONTAINER_NAME
