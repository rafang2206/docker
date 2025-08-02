FROM nginx:1.21.6


# Cachebust permite obviar el cache previo de la imagen
ARG CACHEBUST=1
RUN apt-get update && apt-get -y upgrade

RUN echo '<p>Prueba</p>' > /usr/share/nginx/html/index.html
