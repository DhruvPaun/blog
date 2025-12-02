import { Client,Databases,Storage,ID, Query } from "appwrite";
import config from "../config/config";
export class Services{
    client=new Client();
    databases;
    storage;
    constructor()
    {
        this.client.setEndpoint(config.projectEndpoint).setProject(config.projectId)
        this.databases=new Databases(this.client)
        this.storage=new Storage(this.client)
    }
    async addPost({title,slug,content,coverImage,userId,status}){
        try {
            await this.databases.createDocument(config.projectDatabase,config.projectCollectionId,slug,{
            title,content,coverImage,userId,slug,status
        })
        return true
        } catch (error) {
            console.log(error);
            return false;
        }
    }
    async updatePost(slug,{title,content,coverImage,status})
    {
        return await this.databases.updateDocument(config.projectDatabase,config.projectCollectionId,slug,{
            title,content,coverImage,status
        })
    }
    async deletePost(slug)
    {
        try {
            await this.databases.deleteDocument(config.projectDatabase,config.projectCollectionId,slug)
        } catch (error) {
            console.log(error);
               
        }
    }
    async getPost(slug)
    {
        try {
            return await this.databases.getDocument(config.projectDatabase,config.projectCollectionId,slug)
        } catch (error) {
            console.log(error);
        }
    }
    async getAllPost(queries = [Query.equal("status", "active")])
    {
        try {
            return await this.databases.listDocuments(config.projectDatabase,config.projectCollectionId,queries)    
        } catch (error) {
            console.log("Appwrite serive :: getPosts :: error", error);
            return false
        }
        
    }
    //Files
    async uploadFile(file)
    {
        try {
            return await this.storage.createFile(config.projectBucketId,ID.unique(),file)    
        } catch (error) {
            console.log(error);
        }
    }
    async deleteFile(fileId)
    {
        try {
            await this.storage.deleteFile(config.projectBucketId,fileId)    
            return true
        } catch (error) {
            console.log(error);
            return false
        }
    }
     filePreview(fileId)
    {
        try {
            return this.storage.getFileView(config.projectBucketId, fileId)    
        } catch (error) {
            console.log(error);
        }
        
    }
}

export const services=new Services()