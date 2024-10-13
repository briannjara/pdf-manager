"use client"

import { useState } from 'react'
import { Menu, X, Plus, Search, FileText, Trash2, User, LogOut } from 'lucide-react'
import CreateCategoryModal from './CreateCategoryModal'
import { Input } from './ui/input'
import { Button } from './ui/button'

export default function Dashboard() {
  const [isNavOpen, setIsNavOpen] = useState(false)
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false)
  const [categories, setCategories] = useState([
    { id: 1, name: 'Mathematics', pdfCount: 3 },
    { id: 2, name: 'Physics', pdfCount: 2 },
    { id: 3, name: 'Computer Science', pdfCount: 5 },
  ])

  const toggleNav = () => setIsNavOpen(!isNavOpen)
  const openCreateModal = () => setIsCreateModalOpen(true)
  const closeCreateModal = () => setIsCreateModalOpen(false)

  const handleCreateCategory = (newCategory) => {
    setCategories(prevCategories => [
      ...prevCategories, 
      { ...newCategory, id: prevCategories.length + 1, pdfCount: newCategory.files.length }
    ])
    closeCreateModal() // Automatically close the modal after category creation
  }

  const handleDeleteCategory = (id) => {
    setCategories(categories.filter(category => category.id !== id))
  }

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Navigation Bar */}
      <nav className={`fixed inset-y-0 left-0 transform ${isNavOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition duration-200 ease-in-out z-30 w-64 bg-gray-800 p-6 flex flex-col justify-between`}>
        <div>
          <h1 className="text-2xl font-bold mb-10 text-blue-400">StudyDash</h1>
          <ul className="space-y-6">
            <li>
              <button onClick={openCreateModal} className="flex items-center space-x-2 text-gray-400 hover:text-white transition duration-200">
                <Plus size={20} />
                <span className="text-lg">Create Category</span>
              </button>
            </li>
            <li>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition duration-200">
                <FileText size={20} />
                <span className="text-lg">View Categories</span>
              </button>
            </li>
            <li>
              <button className="flex items-center space-x-2 text-gray-400 hover:text-white transition duration-200">
                <User size={20} />
                <span className="text-lg">Profile</span>
              </button>
            </li>
          </ul>
        </div>
        <button className="flex items-center space-x-2 text-gray-400 hover:text-red-400 transition duration-200">
          <LogOut size={20} />
          <span className="text-lg">Logout</span>
        </button>
      </nav>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-gray-800 p-4 flex justify-between items-center">
          <button onClick={toggleNav} className="lg:hidden text-white">
            {isNavOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className="flex-1 ml-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <Input
                type="search"
                placeholder="Search categories..."
                className="w-full max-w-md pl-10 pr-4 py-2 rounded-full bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
          <Button onClick={openCreateModal} className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-2 px-4 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
            Create Category
          </Button>
        </header>

        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6 bg-gray-900">
          <h2 className="text-2xl font-bold mb-6">Your Study Categories</h2>
          {categories.length === 0 ? (
            <p className="text-gray-400">No categories yet. Click the "Create Category" button to get started!</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <div key={category.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-gray-400 mb-4">{category.pdfCount} PDFs</p>
                    <div className="flex justify-between items-center">
                      <button className="text-blue-400 hover:text-blue-300 transition duration-200">
                        <FileText size={20} />
                      </button>
                      <button 
                        className="text-red-400 hover:text-red-300 transition duration-200"
                        onClick={() => handleDeleteCategory(category.id)}
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </main>
      </div>

      {/* Create Category Modal */}
      {isCreateModalOpen && (
        <CreateCategoryModal 
          onClose={closeCreateModal} 
          onCreateCategory={handleCreateCategory}
        />
      )}
    </div>
  )
}
