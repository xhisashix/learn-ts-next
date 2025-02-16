import React from 'react'

function BigFooter() {
  return (
    <div className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl font-bold">Company Name</h2>
          </div>
          <div>
            <h2 className="text-xl font-bold">Contact Us</h2>
            <p className="mt-2">Email: info@company.com</p>
            <p>Phone: (123) 456-7890</p>
          </div>
        </div>
      </div>
    </div>


  )
}

export default BigFooter