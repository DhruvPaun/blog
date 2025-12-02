const config={
    projectId:String(import.meta.env.VITE_PROJECT_ID),
    projectEndpoint:String(import.meta.env.VITE_PROJECT_ENDPOINT),
    projectDatabase:String(import.meta.env.VITE_DATABASE),
    projectCollectionId:String(import.meta.env.VITE_PROJECT_COLLECTION_ID),
    projectBucketId:String(import.meta.env.VITE_BUCKET_ID)
}
export default config