'use client'

import { useState } from 'react'

export default function UIExamples() {
  const [activeTab, setActiveTab] = useState('shadcn')

  const examples = {
    shadcn: {
      name: 'Shadcn/ui + Tailwind',
      description: 'Modern, clean, highly customizable components',
      features: ['Beautiful design', 'Full customization', 'Modern aesthetics', 'Great documentation'],
      example: (
        <div className="space-y-4 p-6 bg-white rounded-lg border shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900">Shadcn/ui Example</h3>
          <p className="text-gray-600">Clean, modern components with perfect spacing and typography.</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Primary Button
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
              Secondary Button
            </button>
          </div>
          <div className="p-4 bg-gray-50 rounded-md">
            <h4 className="font-semibold mb-2">Card Component</h4>
            <p className="text-sm text-gray-600">Beautiful cards with subtle shadows and perfect spacing.</p>
          </div>
        </div>
      )
    },
    mantine: {
      name: 'Mantine',
      description: '100+ components with great TypeScript support',
      features: ['Comprehensive', 'TypeScript', 'Theming', 'Responsive'],
      example: (
        <div className="space-y-4 p-6 bg-white rounded-lg border shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900">Mantine Example</h3>
          <p className="text-gray-600">Professional components with excellent TypeScript integration.</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors">
              Primary Button
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
              Secondary Button
            </button>
          </div>
          <div className="p-4 bg-indigo-50 rounded-md">
            <h4 className="font-semibold mb-2">Card Component</h4>
            <p className="text-sm text-gray-600">Well-designed cards with consistent spacing and colors.</p>
          </div>
        </div>
      )
    },
    chakra: {
      name: 'Chakra UI',
      description: 'Simple, modular, accessible components',
      features: ['Accessible', 'Modular', 'Simple', 'Customizable'],
      example: (
        <div className="space-y-4 p-6 bg-white rounded-lg border shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900">Chakra UI Example</h3>
          <p className="text-gray-600">Clean, accessible components with great developer experience.</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition-colors">
              Primary Button
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
              Secondary Button
            </button>
          </div>
          <div className="p-4 bg-teal-50 rounded-md">
            <h4 className="font-semibold mb-2">Card Component</h4>
            <p className="text-sm text-gray-600">Accessible cards with proper contrast and spacing.</p>
          </div>
        </div>
      )
    },
    antd: {
      name: 'Ant Design',
      description: 'Enterprise-grade, comprehensive component library',
      features: ['Enterprise', 'Comprehensive', 'Professional', 'Internationalization'],
      example: (
        <div className="space-y-4 p-6 bg-white rounded-lg border shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900">Ant Design Example</h3>
          <p className="text-gray-600">Professional, enterprise-ready components with consistent design.</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Primary Button
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
              Secondary Button
            </button>
          </div>
          <div className="p-4 bg-blue-50 rounded-md">
            <h4 className="font-semibold mb-2">Card Component</h4>
            <p className="text-sm text-gray-600">Enterprise-grade cards with professional styling.</p>
          </div>
        </div>
      )
    },
    mui: {
      name: 'Material-UI (MUI)',
      description: 'Google\'s Material Design system',
      features: ['Material Design', 'Google', 'Comprehensive', 'Consistent'],
      example: (
        <div className="space-y-4 p-6 bg-white rounded-lg border shadow-sm">
          <h3 className="text-2xl font-bold text-gray-900">Material-UI Example</h3>
          <p className="text-gray-600">Google\'s Material Design with consistent, accessible components.</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
              Primary Button
            </button>
            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
              Secondary Button
            </button>
          </div>
          <div className="p-4 bg-blue-50 rounded-md">
            <h4 className="font-semibold mb-2">Card Component</h4>
            <p className="text-sm text-gray-600">Material Design cards with proper elevation and spacing.</p>
          </div>
        </div>
      )
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">UI Library Examples</h1>
          <p className="text-xl text-gray-600">Compare different UI libraries to see which one you prefer</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {Object.entries(examples).map(([key, example]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                activeTab === key
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-300'
              }`}
            >
              {example.name}
            </button>
          ))}
        </div>

        {/* Active Example */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {examples[activeTab as keyof typeof examples].name}
            </h2>
            <p className="text-lg text-gray-600 mb-4">
              {examples[activeTab as keyof typeof examples].description}
            </p>
            <div className="flex flex-wrap gap-2">
              {examples[activeTab as keyof typeof examples].features.map((feature, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>

          {/* Example Component */}
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
            {examples[activeTab as keyof typeof examples].example}
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Comparison</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Library</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Design Quality</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Customization</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Learning Curve</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Best For</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="py-3 px-4 font-medium text-gray-900">Shadcn/ui</td>
                  <td className="py-3 px-4 text-green-600">⭐⭐⭐⭐⭐</td>
                  <td className="py-3 px-4 text-green-600">⭐⭐⭐⭐⭐</td>
                  <td className="py-3 px-4 text-yellow-600">⭐⭐⭐</td>
                  <td className="py-3 px-4 text-gray-600">Modern apps, startups</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-gray-900">Mantine</td>
                  <td className="py-3 px-4 text-green-600">⭐⭐⭐⭐⭐</td>
                  <td className="py-3 px-4 text-green-600">⭐⭐⭐⭐</td>
                  <td className="py-3 px-4 text-green-600">⭐⭐⭐⭐</td>
                  <td className="py-3 px-4 text-gray-600">Full-stack apps</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-gray-900">Chakra UI</td>
                  <td className="py-3 px-4 text-green-600">⭐⭐⭐⭐</td>
                  <td className="py-3 px-4 text-green-600">⭐⭐⭐⭐</td>
                  <td className="py-3 px-4 text-green-600">⭐⭐⭐⭐⭐</td>
                  <td className="py-3 px-4 text-gray-600">Quick prototypes</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-gray-900">Ant Design</td>
                  <td className="py-3 px-4 text-green-600">⭐⭐⭐⭐</td>
                  <td className="py-3 px-4 text-yellow-600">⭐⭐⭐</td>
                  <td className="py-3 px-4 text-yellow-600">⭐⭐⭐</td>
                  <td className="py-3 px-4 text-gray-600">Enterprise apps</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-gray-900">Material-UI</td>
                  <td className="py-3 px-4 text-green-600">⭐⭐⭐⭐</td>
                  <td className="py-3 px-4 text-yellow-600">⭐⭐⭐</td>
                  <td className="py-3 px-4 text-yellow-600">⭐⭐⭐</td>
                  <td className="py-3 px-4 text-gray-600">Google-style apps</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Recommendation */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg p-8 text-white">
          <h3 className="text-2xl font-bold mb-4">My Recommendation</h3>
          <p className="text-lg mb-4">
            Based on your needs for a beautiful, modern website, I recommend <strong>Shadcn/ui</strong> because:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>It's what modern companies like Vercel, Linear, and Stripe use</li>
            <li>Beautiful, clean design that actually looks professional</li>
            <li>Highly customizable - you can make it look exactly how you want</li>
            <li>Great documentation and community support</li>
            <li>Perfect for tech companies like Midnight Studios INTL</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
