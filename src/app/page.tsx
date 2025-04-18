import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#FFFFFF]">
      <div className="text-center p-8 max-w-md">
        {" "}
        
        <div className="mx-auto mb-6 h-12 w-12 rounded-full bg-[#993333] flex items-center justify-center text-[#FFFFFF] font-bold text-xl">
          M
        </div>
      
        <h1 className="text-3xl font-bold mb-3 text-[#333333]">
          Moncq Business Dashboard
        </h1>
   
        <p className="text-base mb-8 text-[#6B7280]">
          Welcome! Access the dashboard to view sales analytics for the Winter
          Collection.
        </p>

        <Link href="/dashboard">
      
          <button
            type="button"
            className={`
              inline-flex items-center justify-center px-6 py-3
              cursor-pointer
              text-sm font-medium rounded-md shadow-sm
              text-[#FFFFFF] bg-[#993333]                                    
              hover:bg-[#802B2B]                                          
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#993333] 
              transition-colors duration-150 ease-in-out                  
            `}
          >
            Go to Dashboard
          </button>
        </Link>
      </div>
    </div>
  );
}
