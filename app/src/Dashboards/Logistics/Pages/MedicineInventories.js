import React, { useEffect, useState } from "react";
import { LOGISTICS_SERVER_URL } from "../../../constant/severUrl";
import {formatDate } from "../../../constant/formatDate";
import axios from "axios";
import { Link } from "react-router-dom";

function MedicineInventoryList() {
  const [document, setDocument] = useState([]);


  useEffect(() => {
		const getDocument = async () => {
		  const data = await axios.get(`${LOGISTICS_SERVER_URL}/medicineInventory/document`);
			setDocument(data.data.documents);																
		};
	
		getDocument();
	}, []);


  return (
    <div>
        <div class="h-screen ">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-6 gap-4  py-10">
           {document.map((document) => (
 
             <div class="border bg-white p-4">
                <h2  class="mt-2  text-base sm:text-lg text-black">
                    <span class="mt-2 font-semibold text-base sm:text-lg">Batch No:</span>  <span>{document.Batch_no}</span>
                </h2>
                  <p class="mt-4 block text-sm sm:text-base text-black">
                    <span class="mt-2 font-semibold text-base sm:text-lg"> Date:</span>  <span>{formatDate(document.uploaded_date)}</span>  
                  </p>
                  <p class="mt-4 block text-sm sm:text-base text-black">
                    <span class="mt-2 font-semibold text-base sm:text-lg"> By:</span>  <span>{document.staff.name}</span> 
                  </p>
                  <Link to={`/logistics/document/${document.document_id}`}>
                    <button className="flex mt-3 px-5 py-1 rounded-md font-bold text-md bg-gray-200 items-center justify-center">
                      View 
                    </button>
                  </Link>
            </div>
           ))}
          </div>
        </div>
    </div>
  )
}

export default MedicineInventoryList