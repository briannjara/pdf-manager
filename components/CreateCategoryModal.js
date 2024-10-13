import { useState } from 'react'
import { FileText } from 'lucide-react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function CreateCategoryModal({ onClose, onCreateCategory }) {
  const [categoryName, setCategoryName] = useState('')
  const [files, setFiles] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (categoryName.trim()) {
      onCreateCategory({ name: categoryName.trim(), files })
      // The modal will be closed automatically by the parent component
    }
  }

  const handleFileChange = (e) => {
    setFiles([...e.target.files])
  }

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-white sm:max-w-md w-full">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold mb-4">Create New Category</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Category Name"
            value={categoryName}
            onChange={(e) => setCategoryName(e.target.value)}
            required
            className="w-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="border-2 border-dashed border-gray-600 rounded-lg p-4 text-center">
            <input
              type="file"
              multiple
              onChange={handleFileChange}
              className="hidden"
              id="file-upload"
            />
            <label htmlFor="file-upload" className="cursor-pointer">
              <FileText size={48} className="mx-auto mb-2 text-gray-400" />
              <p className="text-gray-400">
                {files.length > 0
                  ? `${files.length} file(s) selected`
                  : "Drag and drop PDFs here, or click to select files"}
              </p>
            </label>
          </div>
          <div className="flex justify-end space-x-4">
            <Button 
              type="button" 
              onClick={onClose}
              className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
            >
              Cancel
            </Button>
            <Button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded">
              Create
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
