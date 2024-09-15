import React, { useEffect, useState } from "react";
import { LOGISTICS_SERVER_URL } from "../../../constant/severUrl";
import {formatDate } from "../../../constant/formatDate";
import axios from "axios";
import { Link, useParams } from "react-router-dom";


function DocumentInfo() {
  const [document, setDocument] = useState([]);
  const {document_id} = useParams()
console.log(document_id);


  useEffect(() => {
		const getDocument = async () => {
		  const data = await axios.get(`${LOGISTICS_SERVER_URL}/medicineInventory/document/${document_id}`);
      console.log(data.data.documents[0].document_url);
      
			setDocument(data.data.documents[0].document_url);																
		};
	
		getDocument();
	}, []);


  return (
    <div>
      <iframe
      src={document}
      width="100%"
      height="600px"
      title={`PDF Document ${document}`}
    />
    </div>
  )
}

export default DocumentInfo