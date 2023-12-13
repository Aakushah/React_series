import conf from '../conf/conf.js';

import {Client,Account,ID,Databases,Storage,Query} from 'appwrite';

export class Service {
    client=new Client();
    databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectID);
        this.databases=new Databases(this.client);
        this.bucket=new Storage(this.client);

        
    }


    async createPost({title,slug,content,featuredImage,status,userId}){
        try{
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                   title,
                   content,
                   featuredImage,
                   status,
                   userId,

                }

            )
        }
        catch(error){
            throw error;

        }
    }

    async updateDocument(slug,{title,content,featuredImage,status}){

        try{
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            );
        }
        catch(error){
            throw error;
        }

    }

    async deleteDocument(slug){

        try{
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            );

            return true;

        }
        catch(error){
            console.log("Appwrite servie :: deletePost :: error ",error);

            return false;
        }


    }

    async getDocument(slug){
        try{
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            );


        }
        catch(error){

            console.log("Appwrite servie :: deletePost :: error ",error);

            throw error;
        }

    }

    async getPosts(queries=[Query.equal("status","active")]){
        try{
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            );


        }
        catch{
            console.log("Appwrite servie ::getPosts :: error ",error);

            throw error;
        }
    }

    //file uplaod service

    async uploadFile(file){
        try{
            await this.bucket.createFile(  
                conf.appwriteBucketId,
                ID.unique(),
                file
                );

            return true;


        }
        catch(error){
            console.log("Appwrite servie :: uploadFile :: error ",error);

        }
    }

    async deleteFile(fileID){
        try{

            return await this.bucket.deleteFile(conf.appwriteBucketId,fileID);

        }catch(error){
            console.log('deleteFile Error', error)
            return false;

        }
    }


    getFilePreview(fileId){
        return this.bucket.getFilePreview(conf.appwriteBucketId,fileId)
    }


    getFileForDownload(fileId){
        return this.bucket.getFileDownload(conf.appwriteBucketId,fileId);
    }


    

















}

const service=new Service();

export default service;