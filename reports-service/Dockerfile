FROM maven:3.6.0-jdk-11-slim AS build
COPY reports-service/src /home/app/src
COPY reports-service/pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package

#FROM adoptopenjdk/openjdk11:jdk-11.0.6_10-alpine-slim
FROM openjdk:jdk-oracle
COPY --from=build /home/app/target/reports-service*.jar /usr/local/lib/reports-service.jar
#RUN apk --update add fontconfig msttcorefonts-installer && update-ms-fonts && fc-cache -f

EXPOSE 8882

## Add the wait script to the image
ADD util/wait /wait
RUN chmod +x /wait

CMD /wait && java -jar /usr/local/lib/reports-service.jar