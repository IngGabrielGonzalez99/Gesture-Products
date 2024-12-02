import React from 'react'

export const CardDashboardAdmin = (title, ) => {
  return (
    <div class="bg-white shadow rounded-lg p-4 w-72">
    <div class="flex items-center justify-between">
      <div class="flex items-center space-x-2">
        <svg class="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.553-2.276a2 2 0 011.894 0L22 9.236M4 15.236l4.553-2.276a2 2 0 011.894 0L14 15.236M4 9.236l4.553-2.276a2 2 0 011.894 0L14 9.236M4 5.236l4.553-2.276a2 2 0 011.894 0L14 5.236M20 12v6a2 2 0 01-2 2H6a2 2 0 01-2-2v-6"></path>
        </svg>
        <span class="text-gray-700 font-medium">Vistas en página</span>
      </div>
      <button class="text-gray-400 hover:text-gray-600">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
    </div>
    <div class="mt-4">
      <h2 class="text-2xl font-bold text-gray-900">12,450</h2>
      <div class="flex items-center space-x-1 text-sm text-gray-500 mt-1">
        <span class="text-blue-500">15.8%</span>
        <svg class="w-4 h-4 text-blue-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path stroke-linecap="round" stroke-linejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
        </svg>
      </div>
    </div>
      </div>
  )
}
