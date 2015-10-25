

FROM centos:centos7
MAINTAINER makky <makky.4d6b.3f5@gmail.com>


# add npm package
RUN rpm -ivh http://nginx.org/packages/centos/7/noarch/RPMS/nginx-release-centos-7-0.el7.ngx.noarch.rpm
RUN rpm -ivh http://ftp.riken.jp/Linux/fedora/epel/6/x86_64/epel-release-6-8.noarch.rpm

# update epel-release
RUN yum remove -y epel-release
RUN yum install -y epel-release

# add required packages
RUN yum install -y git python openssl-devel gcc gcc-c++

# nginx
RUN yum install -y nginx --enablerepo=nginx
RUN rm /usr/share/nginx/html/*
RUN sed -i "s/        index  index.html index.htm;/        index  index.html index.htm; try_files \$uri \$uri\/ \/index.html =404;/g" /etc/nginx/conf.d/default.conf

# node
RUN yum install -y nodejs npm
RUN npm install -g npm@2.14.7

# ruby
RUN yum install -y ruby
RUN gem install sass

# clone repository
RUN git clone https://github.com/makky3939/EscapeGoat.git

# build
RUN cd EscapeGoat && npm install
RUN cd EscapeGoat && npm run build
RUN cp -r EscapeGoat/escapegoat/* /usr/share/nginx/html/

# port open
EXPOSE 80

CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
