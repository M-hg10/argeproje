# Hafif bir web sunucusu kullanıyoruz
FROM nginx:alpine

# Flutter çıktılarını sunucunun içine kopyalıyoruz
COPY build/web /usr/share/nginx/html

# 80 portunu dışarı açıyoruz
EXPOSE 80