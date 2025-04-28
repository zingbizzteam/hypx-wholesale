import { AlertCircle } from "lucide-react"

const WholesaleNote = () => {
  return (
    <div className="bg-gray-100 p-6 mt-8 rounded">
      <div className="flex items-start space-x-3">
        <AlertCircle className="flex-shrink-0 mt-1" size={20} />
        <div>
          <h3 className="font-medium text-lg mb-2">Note :</h3>
          <p className="text-gray-700">
            This is a <strong>wholesale website</strong> where you can submit a quote or enquiry for the products you're
            interested in. The total quantity will be considered at checkout, while size selection, customization,
            segregation, sorting, and color selection will be finalized after our team contacts you. Once you proceed to
            checkout and fill in your details, our team will review your request and reach out with pricing and further
            customization options. For any queries, feel free to contact our support team.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WholesaleNote
