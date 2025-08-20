import Image from "next/image";

export function ImageBlock({ src, publicId, index, onImageUpload, onImageDelete, onAddBlock, onRemoveBlock, isUploading }) {
  return (
    <div className="space-y-2 border border-gray-600 p-4 rounded bg-[#1A1336] shadow-sm">
      <div className="flex flex-col items-center">
        {src ? (
          <div className="relative">
            <Image
              src={src}
              alt="Uploaded"
              width={500}
              height={300}
              className="rounded"
            />
            <button
              type="button"
              onClick={() => onImageDelete(index, publicId)}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition-colors"
              title="Delete image"
            >
              ×
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            {isUploading ? (
              <div className="flex flex-col items-center gap-2">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#00E5FF]"></div>
                <span className="text-gray-300">Uploading...</span>
              </div>
            ) : (
              <label className="cursor-pointer text-[#00E5FF] hover:underline">
                Upload Image
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) =>
                    e.target.files && onImageUpload(index, e.target.files[0])
                  }
                />
              </label>
            )}
          </div>
        )}
      </div>

      <div className="flex gap-2 pt-2 border-t border-gray-600">
        <button
          type="button"
          onClick={() => onAddBlock("text", index)}
          className="px-3 py-1 bg-green-500 text-white rounded"
        >
          + Text
        </button>
        <button
          type="button"
          onClick={() => onAddBlock("image", index)}
          className="px-3 py-1 bg-blue-500 text-white rounded"
        >
          + Image
        </button>
        <button
          type="button"
          onClick={() => onRemoveBlock(index)}
          className="px-3 py-1 bg-red-500 text-white rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}