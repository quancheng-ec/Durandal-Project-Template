FROM quancheng/runtime-image:1.1

ADD package.json /root

WORKDIR /root

RUN cnpm config set registry http://npm.dev.quancheng-ec.com
RUN cnpm install --quiet

ADD /config /root/config
ADD /src /root/src
ADD .babelrc /root

RUN npm run build

CMD ["npm","start"]

