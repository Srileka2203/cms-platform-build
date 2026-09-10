// import React from 'react';
// import Link from 'next/link';
// import {
//   ArrowLeft,
//   CheckCircle2,
//   ArrowRight,
// } from 'lucide-react';

// interface Product {
//   id: string;
//   name: string;
//   category: string;
//   shortDescription: string;
//   description: string;
//   features: string[];
//   benefits: string[];
// }

// const products: Product[] = [
//   {
//     id: '1',
//     name: 'CMS Platform',
//     category: 'Web Solutions',
//     shortDescription:
//       'A flexible content management platform designed to help businesses manage and grow their digital presence.',
//     description:
//       'Our CMS Platform provides businesses with a simple and reliable way to manage website content, organize digital information, and maintain an efficient online presence. It is designed with flexibility, scalability, and ease of use in mind.',
//     features: [
//       'Easy content management',
//       'Responsive design',
//       'Scalable architecture',
//       'Secure user management',
//       'Flexible content structure',
//       'Modern administration tools',
//     ],
//     benefits: [
//       'Reduce content management effort',
//       'Improve website productivity',
//       'Manage content from one place',
//       'Scale as your business grows',
//     ],
//   },
//   {
//     id: '2',
//     name: 'Business Management',
//     category: 'Business Solutions',
//     shortDescription:
//       'A centralized solution that helps businesses organize their operations and manage essential business activities.',
//     description:
//       'Business Management brings important business processes together in one place. It helps teams manage their daily activities, improve visibility, and make informed decisions.',
//     features: [
//       'Centralized management',
//       'User and role management',
//       'Business dashboards',
//       'Data organization',
//       'Activity tracking',
//       'Reporting capabilities',
//     ],
//     benefits: [
//       'Improve operational efficiency',
//       'Centralize business information',
//       'Save time on repetitive tasks',
//       'Make better business decisions',
//     ],
//   },
//   {
//     id: '3',
//     name: 'Digital Solutions',
//     category: 'Technology',
//     shortDescription:
//       'Modern digital solutions designed to help businesses solve challenges and create better customer experiences.',
//     description:
//       'Our digital solutions combine modern technologies with practical business requirements to create reliable and scalable digital experiences.',
//     features: [
//       'Custom development',
//       'Modern technologies',
//       'Responsive experiences',
//       'Scalable solutions',
//       'API integration',
//       'Ongoing improvements',
//     ],
//     benefits: [
//       'Solve business challenges',
//       'Improve customer experience',
//       'Increase digital efficiency',
//       'Support long-term growth',
//     ],
//   },
// ];

// interface ProductPageProps {
//   params: Promise<{
//     id: string;
//   }>;
// }

// export default async function ProductOverview({
//   params,
// }: ProductPageProps) {
//   const { id } = await params;

//   const product = products.find(
//     (item) => item.id === id
//   );

//   // Product not found
//   if (!product) {
//     return (
//       <main className="min-h-screen bg-gray-100">
//         <section className="py-20 sm:py-24">
//           <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">

//             <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
//               Product Not Found
//             </h1>

//             <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-gray-600">
//               The product you are looking for does not exist or
//               may no longer be available.
//             </p>

//             <Link
//               href="/products"
//               className="mt-8 inline-flex items-center rounded-xl
//                          bg-gray-900 px-6 py-3.5
//                          text-sm font-semibold text-white
//                          transition hover:bg-gray-700
//                          focus:outline-none focus:ring-2
//                          focus:ring-gray-400 focus:ring-offset-2"
//             >
//               <ArrowLeft className="mr-2 h-4 w-4" />
//               Back to Products
//             </Link>

//           </div>
//         </section>
//       </main>
//     );
//   }

//   return (
//     <main className="bg-white">

//       {/* Hero */}
//       <section className="bg-gray-100 py-20 sm:py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//           {/* Back Link */}
//           <Link
//             href="/products"
//             className="inline-flex items-center text-sm font-semibold
//                        text-gray-600 transition hover:text-gray-900
//                        focus:outline-none focus:ring-2
//                        focus:ring-gray-400 focus:ring-offset-2"
//           >
//             <ArrowLeft className="mr-2 h-4 w-4" />
//             Back to Products
//           </Link>

//           <div className="mt-10 max-w-4xl">

//             {/* Category */}
//             <span
//               className="inline-flex rounded-full bg-gray-200
//                          px-4 py-2 text-sm font-semibold text-gray-700"
//             >
//               {product.category}
//             </span>

//             {/* Product Name */}
//             <h1
//               className="mt-5 text-4xl font-bold tracking-tight
//                          text-gray-900 sm:text-5xl lg:text-6xl"
//             >
//               {product.name}
//             </h1>

//             {/* Short Description */}
//             <p
//               className="mt-6 max-w-3xl text-lg leading-8
//                          text-gray-600 sm:text-xl"
//             >
//               {product.shortDescription}
//             </p>

//           </div>

//         </div>
//       </section>

//       {/* Product Overview */}
//       <section className="bg-white py-20 sm:py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//           <div className="grid gap-12 lg:grid-cols-3">

//             {/* Description */}
//             <div className="lg:col-span-2">

//               <span
//                 className="text-sm font-semibold uppercase
//                            tracking-widest text-gray-500"
//               >
//                 Product Overview
//               </span>

//               <h2
//                 className="mt-4 text-3xl font-bold tracking-tight
//                            text-gray-900 sm:text-4xl"
//               >
//                 Built to solve real business challenges
//               </h2>

//               <p
//                 className="mt-5 max-w-3xl text-base leading-8
//                            text-gray-600 sm:text-lg"
//               >
//                 {product.description}
//               </p>

//             </div>

//             {/* Product Information */}
//             <div
//               className="rounded-2xl border border-gray-200
//                          bg-gray-50 p-7"
//             >
//               <h3 className="text-lg font-bold text-gray-900">
//                 Product Information
//               </h3>

//               <div className="mt-6 space-y-5">

//                 <div>
//                   <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
//                     Product
//                   </p>

//                   <p className="mt-1 text-sm font-semibold text-gray-900">
//                     {product.name}
//                   </p>
//                 </div>

//                 <div>
//                   <p className="text-xs font-semibold uppercase tracking-wider text-gray-500">
//                     Category
//                   </p>

//                   <p className="mt-1 text-sm font-semibold text-gray-900">
//                     {product.category}
//                   </p>
//                 </div>

//               </div>
//             </div>

//           </div>

//         </div>
//       </section>

//       {/* Features */}
//       <section className="bg-gray-100 py-20 sm:py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//           <div className="max-w-3xl">
//             <span
//               className="text-sm font-semibold uppercase
//                          tracking-widest text-gray-500"
//             >
//               Features
//             </span>

//             <h2
//               className="mt-4 text-3xl font-bold tracking-tight
//                          text-gray-900 sm:text-4xl"
//             >
//               Everything you need
//             </h2>

//             <p className="mt-4 text-base leading-7 text-gray-600">
//               Designed with practical features that make the
//               product easy to use and effective for your business.
//             </p>
//           </div>

//           <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

//             {product.features.map((feature) => (
//               <div
//                 key={feature}
//                 className="flex items-start gap-4 rounded-2xl
//                            border border-gray-200 bg-white p-6
//                            shadow-sm"
//               >
//                 <CheckCircle2
//                   className="mt-0.5 h-5 w-5 shrink-0 text-gray-700"
//                 />

//                 <p className="text-sm font-medium leading-6 text-gray-700">
//                   {feature}
//                 </p>
//               </div>
//             ))}

//           </div>

//         </div>
//       </section>

//       {/* Benefits */}
//       <section className="bg-white py-20 sm:py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//           <div className="grid items-center gap-12 lg:grid-cols-2">

//             <div>
//               <span
//                 className="text-sm font-semibold uppercase
//                            tracking-widest text-gray-500"
//               >
//                 Benefits
//               </span>

//               <h2
//                 className="mt-4 text-3xl font-bold tracking-tight
//                            text-gray-900 sm:text-4xl"
//               >
//                 Designed around your goals
//               </h2>

//               <p className="mt-5 text-base leading-8 text-gray-600">
//                 Our solution focuses on helping your team work
//                 efficiently while creating a foundation for
//                 long-term growth.
//               </p>
//             </div>

//             <div className="space-y-4">

//               {product.benefits.map((benefit, index) => (
//                 <div
//                   key={benefit}
//                   className="flex items-center gap-4 rounded-2xl
//                              border border-gray-200 bg-white p-5
//                              shadow-sm"
//                 >
//                   <div
//                     className="flex h-9 w-9 shrink-0 items-center
//                                justify-center rounded-full
//                                bg-gray-900 text-sm font-bold text-white"
//                   >
//                     {index + 1}
//                   </div>

//                   <p className="text-sm font-semibold text-gray-800">
//                     {benefit}
//                   </p>
//                 </div>
//               ))}

//             </div>

//           </div>

//         </div>
//       </section>

//       {/* CTA */}
//       <section className="bg-gray-100 py-20 sm:py-24">
//         <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

//           <div
//             className="rounded-3xl bg-gray-900 px-6 py-12
//                        text-center shadow-lg sm:px-10 sm:py-16"
//           >
//             <h2
//               className="text-3xl font-bold tracking-tight
//                          text-white sm:text-4xl"
//             >
//               Interested in {product.name}?
//             </h2>

//             <p
//               className="mx-auto mt-4 max-w-2xl text-base
//                          leading-7 text-gray-400 sm:text-lg"
//             >
//               Get in touch with our team to learn more about
//               this product and discuss how it can support your
//               business.
//             </p>

//             <Link
//               href="/contact"
//               className="mt-8 inline-flex items-center rounded-xl
//                          bg-white px-6 py-3.5
//                          text-sm font-semibold text-gray-900
//                          transition hover:bg-gray-200
//                          focus:outline-none focus:ring-2
//                          focus:ring-gray-400 focus:ring-offset-2
//                          focus:ring-offset-gray-900"
//             >
//               Get Started
//               <ArrowRight className="ml-2 h-4 w-4" />
//             </Link>

//           </div>

//         </div>
//       </section>

//     </main>
//   );
// }