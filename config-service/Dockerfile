FROM maven:3.6.0-jdk-11-slim AS build
COPY config-service/src /home/app/src
COPY config-service/pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package

FROM adoptopenjdk/openjdk11:jdk-11.0.6_10-alpine-slim
COPY --from=build /home/app/target/config-service*.jar /usr/local/lib/config-service.jar
EXPOSE 8888

## Add the wait script to the image
ADD util/wait /wait
RUN chmod +x /wait

CMD /wait && java -jar /usr/local/lib/config-service.jar