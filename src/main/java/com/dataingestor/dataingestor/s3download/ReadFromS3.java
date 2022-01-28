package com.dataingestor.dataingestor.s3download;

//import com.amazonaws.auth.AWSStaticCredentialsProvider;
//import com.amazonaws.auth.BasicAWSCredentials;
//import com.amazonaws.regions.Regions;
//import com.amazonaws.services.s3.AmazonS3;
//import com.amazonaws.services.s3.AmazonS3ClientBuilder;
//import com.amazonaws.services.s3.model.GetObjectRequest;
//import com.amazonaws.services.s3.model.S3Object;
//
//public class ReadFromS3 {
//
//    private static void execute() {
//        final String BUCKET_NAME = "";
//        final String OBJECT_NAME = "";
//        final String ACCESS_KEY = "";
//        final String SECRET_KEY = "";
//
//        // Setup S3 Client
//        BasicAWSCredentials credentials = new BasicAWSCredentials(ACCESS_KEY, SECRET_KEY);
//        AmazonS3 s3Client =  AmazonS3ClientBuilder.standard().
//                withCredentials(new AWSStaticCredentialsProvider(credentials))
//                .withRegion(Regions.US_EAST_1)
//                .build();
//
////        Get object from S3
//        GetObjectRequest request = new GetObjectRequest(BUCKET_NAME, OBJECT_NAME);
//
//        s3Client.getObject(request);
//
//        S3Object s3Object = s3Client.getObject(BUCKET_NAME, OBJECT_NAME);
//    }
//}
