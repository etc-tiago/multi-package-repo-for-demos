# Start Mysql
sudo service mysql start

# S3 Buckets
aws --endpoint-url=http://localhost:4572 s3 mb s3://dretcbr.attendance-assets
aws --endpoint-url=http://localhost:4572 s3 mb s3://dretcbr.profile

# DynamoDB
./database/dynamo/dynamo.sh