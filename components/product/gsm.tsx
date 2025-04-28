import React from 'react'

function gsm() {
    return (
        <div className="text-justify cp3 leading-6 mt-2">
            <table className="w-full border text-sm text-left border-collapse mt-4">
                <thead>
                    <tr className="bg-gray-100">
                        <th className="border p-2 font-semibold">GSM Range</th>
                        <th className="border p-2 font-semibold">Fabric Weight</th>
                        <th className="border p-2 font-semibold">Typical Usage</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border p-2">150 – 200 GSM</td>
                        <td className="border p-2">Lightweight Fabric</td>
                        <td className="border p-2">
                            T-shirts, summer wear, lightweight hoodies, casual shirts
                        </td>
                    </tr>
                    <tr>
                        <td className="border p-2">200 – 300 GSM</td>
                        <td className="border p-2">Mediumweight Fabric</td>
                        <td className="border p-2">
                            Heavy T-shirts, polo shirts, basic sweatshirts, joggers
                        </td>
                    </tr>
                    <tr>
                        <td className="border p-2">300 – 400 GSM</td>
                        <td className="border p-2">Heavyweight Fabric</td>
                        <td className="border p-2">
                            Premium hoodies, sweatshirts, winter joggers, outerwear
                        </td>
                    </tr>
                    <tr>
                        <td className="border p-2">400 – 500 GSM</td>
                        <td className="border p-2">Ultra Heavyweight Fabric</td>
                        <td className="border p-2">
                            Luxury hoodies, heavy jackets, streetwear essentials
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default gsm
