FROM maven:3.6.0-jdk-11-slim AS build
COPY assets-service/src /home/app/src
COPY assets-service/pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package

FROM adoptopenjdk/openjdk11:jdk-11.0.6_10-alpine-slim
COPY --from=build /home/app/target/assets-service*.jar /usr/local/lib/assets-service.jar
EXPOSE 8881
## Add the wait script to the image
ADD util/wait /wait
RUN chmod +x /wait

CMD /wait && java -jar /usr/local/lib/assets-service.jar