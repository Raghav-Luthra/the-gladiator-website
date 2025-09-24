import React, { useState } from 'react';
import { Sparkles, Citrus, Heart, ShoppingCart, Star, Package, Truck, Shield } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  flavor: string;
  description: string;
  price: number;
  originalPrice?: number;
  color: string;
  icon: React.ReactNode;
  features: string[];
  rating: number;
  reviews: number;
  bundle: { count: number; price: number; savings: string };
  inStock: boolean;
  badge?: string;
}

const Products: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<string>('strawberry');
  const [showOutOfStock, setShowOutOfStock] = useState<string | null>(null);

  const products: Product[] = [
    {
      id: 'strawberry',
      name: 'Strawberry Fusion 6-Pack',
      flavor: 'Sweet Berry Explosion',
      description: 'A luscious blend of wild strawberries and exotic fruits that delivers an explosive taste experience. This 6-pack bundle ensures you have enough warrior fuel to conquer any challeng[...]
      price: 650,
      originalPrice: 1000,
      color: 'from-pink-600 to-red-500',
      icon: <src="/fusion.png"/>,
      features: ['Wild Berry Essence', 'Natural Fruit Extracts', 'Zero Artificial Colors', 'Crisp Carbonation'],
      rating: 4.8,
      reviews: 1247,
      bundle: { count: 6, price: 650, savings: '35% OFF' },
      inStock: false,
      badge: 'BESTSELLER'
    },
    {
      id: 'citrus',
      name: 'Citrus Blend 6-Pack',
      flavor: 'Zesty Lightning Strike',
      description: 'An electrifying fusion of premium citrus fruits that awakens your senses with every drop. This 6-pack warrior arsenal delivers a refreshing punch that energizes your entire being. [...]
      price: 650,
      color: 'from-orange-500 to-yellow-400',
      image: 'https://raw.githubusercontent.com/Raghav-Luthra/the-gladiator-website/main/citrus.png',
      features: ['Fresh Citrus Oils', 'Vitamin C Boost', 'Natural Tang', 'Invigorating Bubbles'],
      rating: 4.7,
      reviews: 892,
      bundle: { count: 6, price: 650, savings: '35% OFF' },
      inStock: false,
      badge: 'NEW'
    },
    {
      id: 'cranberry',
      name: 'Cranberry Blast 6-Pack',
      flavor: 'Tart Power Surge',
      description: 'A fierce and invigorating cranberry experience that commands attention. This 6-pack collection delivers an intense burst of tart sophistication with a smooth, satisfying finish. St[...]
      price: 650,
      originalPrice: 1000,
      color: 'from-red-600 to-purple-500',
      icon: <Sparkles className="w-8 h-8" />,
      features: ['Premium Cranberries', 'Antioxidant Rich', 'Bold Tartness', 'Smooth Finish'],
      rating: 4.9,
      reviews: 1563,
      bundle: { count: 6, price: 650, savings: '35% OFF' },
      inStock: false,
      badge: 'LIMITED'
    }
  ];

  const selectedProductData = products.find(p => p.id === selectedProduct) || products[0];


  const handleOrderNow = (productId: string) => {
    setShowOutOfStock(productId);
    setTimeout(() => setShowOutOfStock(null), 3000);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`}
      />
    ));
  };

  return (
    <section id="products" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black font-orbitron mb-6 bg-gradient-to-r from-white to-teal-300 bg-clip-text text-transparent">
            WARRIOR FLAVORS
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Three legendary flavors forged for those who refuse to settle for ordinary
          </p>
        </div>

        {/* Product Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setSelectedProduct(product.id)}
              className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedProduct === product.id
                  ? `bg-gradient-to-r ${product.color} text-white shadow-lg scale-105`
                  : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <span className="relative z-10">{product.name}</span>
              {selectedProduct === product.id && (
                <div className={`absolute inset-0 bg-gradient-to-r ${product.color} rounded-full blur-lg opacity-30`}></div>
              )}
            </button>
          ))}
        </div>

        {/* Featured Product Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Product Visual */}
          <div className="relative">
            <div
              className={`relative w-80 h-80 mx-auto bg-gradient-to-br ${selectedProductData.color} rounded-full flex items-center justify-center shadow-2xl`}
            >
              {/* ✅ Show image if available, otherwise fallback to icon */}
              {selectedProductData.image ? (
                <img
                  src={selectedProductData.image}
                  alt={selectedProductData.name}
                  className="w-40 h-40 object-contain drop-shadow-xl"
                />
              ) : (
                <div className="text-white text-6xl">
                  {selectedProductData.icon}
                </div>
              )}

              {/* Glow Effect */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${selectedProductData.color} rounded-full blur-2xl opacity-50 animate-pulse`}
              ></div>
            </div>
            
            {/* Product Badge */}
            {selectedProductData.badge && (
              <div className="absolute top-4 right-4 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                {selectedProductData.badge}
              </div>
            )}
          </div>

          {/* Product Details */}
          <div className="space-y-8">
            <div>
              <h3 className="text-4xl md:text-5xl font-black font-orbitron mb-2 text-white">
                {selectedProductData.name}
              </h3>
              <p className="text-xl text-teal-400 font-semibold mb-4">
                {selectedProductData.flavor}
              </p>
              
              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex space-x-1">
                  {renderStars(selectedProductData.rating)}
                </div>
                <span className="text-gray-300 text-sm">
                  {selectedProductData.rating} ({selectedProductData.reviews} reviews)
                </span>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                {selectedProductData.description}
              </p>

              {/* Price */}
              <div className="flex items-center space-x-3 mb-6">
                <span className="text-3xl font-bold text-white">
                  ₹{selectedProductData.price}
                </span>
                {selectedProductData.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">
                    ₹{selectedProductData.originalPrice}
                  </span>
                )}
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                  {selectedProductData.bundle.savings}
                </span>
              </div>

              {/* Bundle Info */}
              <div className="mb-6">
                <h4 className="text-lg font-bold text-white mb-3">Bundle Details</h4>
                <div className="bg-gray-800/50 rounded-lg p-4 border border-teal-500/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <Package className="w-6 h-6 text-teal-400" />
                      <div>
                        <p className="text-white font-semibold">{selectedProductData.bundle.count} Bottles</p>
                        <p className="text-gray-400 text-sm">355ml each (2.13L total)</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-teal-400 font-bold">{selectedProductData.bundle.savings}</p>
                      <p className="text-gray-400 text-sm">vs individual</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features */}
            <div>
              <h4 className="text-xl font-bold text-white mb-4">FLAVOR PROFILE</h4>
              <div className="grid grid-cols-2 gap-3">
                {selectedProductData.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-teal-400 rounded-full"></div>
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Button */}
            <div className="relative">
              <button 
                onClick={() => handleOrderNow(selectedProduct)}
                className={`group relative w-full px-8 py-4 bg-gradient-to-r ${selectedProductData.color} rounded-full font-bold text-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-[...]
              >
                <span className="relative z-10 flex items-center justify-center space-x-2 text-white">
                  <ShoppingCart className="w-5 h-5" />
                  <span>ORDER 6-PACK - ₹{selectedProductData.price}</span>
                </span>
                <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>

              {/* Out of Stock Message */}
              {showOutOfStock === selectedProduct && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-red-500/90 backdrop-blur-sm text-white p-4 rounded-lg border border-red-400 animate-pulse">
                  <div className="flex items-center justify-center space-x-2">
                    <Package className="w-5 h-5" />
                    <span className="font-semibold">OUT OF STOCK</span>
                  </div>
                  <p className="text-sm mt-1 text-center">This 6-pack warrior bundle is currently conquering new territories. Check back soon!</p>
                </div>
              )}
            </div>

            {/* Product Benefits */}
            <div className="flex items-center justify-center space-x-8 pt-6 border-t border-gray-800">
              <div className="flex items-center space-x-2 text-gray-400">
                <Truck className="w-4 h-4" />
                <span className="text-sm">Free Shipping on Bundles</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400">
                <Shield className="w-4 h-4" />
                <span className="text-sm">30-Day Guarantee</span>
              </div>
            </div>
          </div>
        </div>

        {/* All Products Grid - Ecommerce Style */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-teal-500/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ov[...]
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Product Badge */}
              {product.badge && (
                <div className="absolute top-4 right-4 z-10 bg-teal-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                  {product.badge}
                </div>
              )}

              {/* Product Image Area */}
              <div className={`relative h-48 bg-gradient-to-br ${product.color} flex items-center justify-center`}>
                <div className="text-white text-4xl group-hover:scale-110 transition-transform duration-300">
                  {product.icon}
                </div>
                <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-20 group-hover:opacity-30 transition-opacity duration-300`}></div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-xl font-bold font-orbitron text-white group-hover:text-teal-300 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-teal-400 font-semibold text-sm">
                    {product.flavor}
                  </p>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-1">
                    {renderStars(product.rating)}
                  </div>
                  <span className="text-gray-400 text-sm">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-bold text-white">₹{product.price}</span>
                  {product.originalPrice && (
                    <span className="text-gray-500 line-through">₹{product.originalPrice}</span>
                  )}
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-xs font-bold">
                    {product.bundle.savings}
                  </span>
                </div>

                {/* Bundle Info */}
                <div>
                  <div className="bg-gray-800/30 rounded-lg p-3 border border-gray-700">
                    <div className="flex items-center space-x-2 mb-1">
                      <Package className="w-4 h-4 text-teal-400" />
                      <span className="text-white font-semibold text-sm">{product.bundle.count}-Pack Bundle</span>
                    </div>
                    <p className="text-gray-400 text-xs">355ml × {product.bundle.count} = 2.13L total</p>
                  </div>
                </div>

                {/* Quick Features */}
                <div className="space-y-1">
                  {product.features.slice(0, 2).map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-teal-400 rounded-full"></div>
                      <span className="text-gray-400 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Order Button */}
                <div className="relative pt-4">
                  <button
                    onClick={() => handleOrderNow(product.id)}
                    className={`group relative w-full px-6 py-3 bg-gradient-to-r ${product.color} rounded-lg font-bold transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden`[...]
                  >
                    <span className="relative z-10 flex items-center justify-center space-x-2 text-white">
                      <ShoppingCart className="w-4 h-4" />
                      <span>ORDER 6-PACK</span>
                    </span>
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                  </button>

                  {/* Out of Stock Popup */}
                  {showOutOfStock === product.id && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-red-500/95 backdrop-blur-sm text-white p-3 rounded-lg border border-red-400 z-20 animate-pulse">
                      <div className="flex items-center justify-center space-x-2">
                        <Package className="w-5 h-4" />
                        <span className="font-semibold text-sm">OUT OF STOCK</span>
                      </div>
                      <p className="text-xs mt-1 text-center opacity-90">
                        This 6-pack bundle is conquering new territories!
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} rounded-2xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
            </div>
          ))}
        </div>

        {/* Ecommerce Features */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-500/20 transition-colors duration-300">
              <Truck className="w-8 h-8 text-teal-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Free Bundle Shipping</h3>
            <p className="text-gray-400">Free shipping on all 6-pack bundles. Your warrior fuel delivered fast.</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-500/20 transition-colors duration-300">
              <Shield className="w-8 h-8 text-teal-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">30-Day Guarantee</h3>
            <p className="text-gray-400">Not satisfied with your bundle? We'll refund your warrior investment.</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-teal-500/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-500/20 transition-colors duration-300">
              <Star className="w-8 h-8 text-teal-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Premium Quality</h3>
            <p className="text-gray-400">Crafted with the finest ingredients for true warriors.</p>
          </div>
        </div>

        {/* Ultimate Bundle Offer */}
        <div className="mt-20 bg-gradient-to-r from-teal-600/20 to-teal-400/10 rounded-3xl p-8 border border-teal-500/30">
          <div className="text-center">
            <h3 className="text-3xl font-bold font-orbitron text-white mb-4">
              ULTIMATE WARRIOR <span className="text-teal-400">ARSENAL</span>
            </h3>
            <p className="text-gray-300 mb-6">Get all three 6-pack flavors (18 bottles total) and save even more!</p>
            
            <div className="flex items-center justify-center space-x-4 mb-6">
              <span className="text-3xl font-bold text-white">₹1800</span>
              <span className="text-xl text-gray-500 line-through">₹3000</span>
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                SAVE ₹1200
              </span>
            </div>

            <button
              onClick={() => handleOrderNow('bundle')}
              className="relative group px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-500 rounded-full font-bold text-lg transition-all duration-300 hover:from-teal-500 hover:to-teal-400 hover:shad[...]
            >
              <span className="relative z-10 flex items-center space-x-2 text-white">
                <ShoppingCart className="w-5 h-5" />
                <span>ORDER ULTIMATE ARSENAL</span>
              </span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>

            {/* Bundle Out of Stock */}
            {showOutOfStock === 'bundle' && (
              <div className="mt-4 bg-red-500/90 backdrop-blur-sm text-white p-4 rounded-lg border border-red-400 animate-pulse">
                <div className="flex items-center justify-center space-x-2">
                  <Package className="w-5 h-5" />
                  <span className="font-semibold">ULTIMATE ARSENAL TEMPORARILY OUT OF STOCK</span>
                </div>
                <p className="text-sm mt-1">Our warriors are restocking the ultimate arsenal. Individual 6-packs available soon!</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
