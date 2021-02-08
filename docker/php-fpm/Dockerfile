FROM php:fpm-alpine
COPY ./wait.sh /usr/bin/wait.sh
RUN chmod +x /usr/bin/wait.sh
RUN apk --update --no-cache add git
RUN apk add --no-cache bash
RUN docker-php-ext-install pdo_mysql
COPY --from=composer /usr/bin/composer /usr/bin/composer
WORKDIR /var/www
CMD composer install ; wait database:3306 -- bin/console doctrine:migrations:migrate ;  php-fpm
EXPOSE 9000