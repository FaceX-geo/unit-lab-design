interface FileError {
    message: string;
    code: string;
}
interface FileUploadProps {
    onUploadSuccess?: (file: File) => void;
    onUploadError?: (error: FileError) => void;
    acceptedFileTypes?: string[];
    maxFileSize?: number;
    currentFile?: File | null;
    onFileRemove?: () => void;
    /** Duration in milliseconds for the upload simulation. Defaults to 2000ms (2s), 0 for no simulation */
    uploadDelay?: number;
    validateFile?: (file: File) => FileError | null;
    className?: string;
}
declare function FileUpload({ onUploadSuccess, onUploadError, acceptedFileTypes, maxFileSize, currentFile: initialFile, onFileRemove, uploadDelay, validateFile, className, }: FileUploadProps): import("react").JSX.Element;
declare namespace FileUpload {
    var displayName: string;
}
export default FileUpload;
