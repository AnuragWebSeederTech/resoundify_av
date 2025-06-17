import React from 'react';
import { Settings, Network, Users, Zap, CheckCircle, Monitor, Cable, Wrench } from 'lucide-react';

export default function WhatResoundifyDoes() {
  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16">
      
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-4">
          What <span className="text-blue-600">Resoundify</span> Does
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
      </div>

      {/* Main Content Grid */}
      <div className="grid lg:grid-cols-12 gap-8 px-6 lg:px-12">
        
        {/* Left - Company Operations */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
            <div className="inline-flex items-center space-x-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
              <Settings className="w-4 h-4 text-blue-600" />
              <span className="text-sm font-medium text-blue-700">How We Operate</span>
            </div>
            
            <h3 className="text-2xl font-bold text-slate-800 mb-4">
              Engineering Audio Networks
            </h3>
            
            <p className="text-slate-600 leading-relaxed mb-6">
              Resoundify engineers comprehensive audio-visual networking solutions using advanced Dante technology. We transform complex audio requirements into streamlined, professional-grade systems.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-slate-600">Design custom Dante network architectures</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm text-slate-600">Deploy scalable audio distribution systems</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-slate-600">Integrate with existing IT infrastructure</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center - Technology Process */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Top Row - Tech Implementation */}
          <div className="grid grid-cols-3 gap-4">
            <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg border border-gray-200/50 hover:border-blue-300/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Network className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-slate-800 mb-2">Network Design</h4>
              <p className="text-sm text-slate-600 leading-relaxed">Configure Dante networks for optimal audio routing and performance.</p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg border border-gray-200/50 hover:border-blue-300/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Cable className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-slate-800 mb-2">System Integration</h4>
              <p className="text-sm text-slate-600 leading-relaxed">Connect devices using standard Ethernet infrastructure.</p>
            </div>

            <div className="group bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg border border-gray-200/50 hover:border-blue-300/50 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Monitor className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-slate-800 mb-2">Control Systems</h4>
              <p className="text-sm text-slate-600 leading-relaxed">Deploy centralized management and monitoring solutions.</p>
            </div>
          </div>

          {/* Bottom Row - Service Approach */}
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl p-6 border border-blue-200/50">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-bold text-slate-800">Implementation</h4>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                We handle complete project lifecycle from initial consultation through final system commissioning and testing.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-6 border border-green-200/50">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h4 className="text-lg font-bold text-slate-800">Support</h4>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">
                Provide ongoing technical support, system optimization, and staff training for seamless operations.
              </p>
            </div>
          </div>
        </div>

        {/* Right - Success Metrics */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
            <h4 className="text-xl font-bold text-slate-800 mb-6">Our Success</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <div>
                  <div className="font-semibold text-slate-800">500+ Projects</div>
                  <div className="text-sm text-slate-600">Successfully deployed</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3">
                <CheckCircle className="w-5 h-5 text-blue-600" />
                <div>
                  <div className="font-semibold text-slate-800">98% Uptime</div>
                  <div className="text-sm text-slate-600">System reliability</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3">
                <CheckCircle className="w-5 h-5 text-purple-600" />
                <div>
                  <div className="font-semibold text-slate-800">50+ Countries</div>
                  <div className="text-sm text-slate-600">Global installations</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3">
                <CheckCircle className="w-5 h-5 text-orange-600" />
                <div>
                  <div className="font-semibold text-slate-800">24/7 Monitoring</div>
                  <div className="text-sm text-slate-600">Network health tracking</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-slate-100 to-gray-100 rounded-2xl p-6 border border-slate-200/50">
            <p className="text-sm text-slate-600 leading-relaxed text-center">
              <span className="font-semibold text-slate-800">Dante Technology</span> enables us to deliver enterprise-grade audio networking solutions across industries.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Technology Focus */}
      <div className="mt-12 mx-6 lg:mx-12">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 overflow-hidden">
          <div className="grid grid-cols-4 divide-x divide-slate-200">
            <div className="p-6 text-center hover:bg-blue-50 transition-colors">
              <div className="text-2xl font-bold text-blue-600 mb-1">Dante</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">Core Technology</div>
            </div>
            <div className="p-6 text-center hover:bg-green-50 transition-colors">
              <div className="text-2xl font-bold text-green-600 mb-1">IP-Based</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">Audio Transport</div>
            </div>
            <div className="p-6 text-center hover:bg-purple-50 transition-colors">
              <div className="text-2xl font-bold text-purple-600 mb-1">Ethernet</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">Infrastructure</div>
            </div>
            <div className="p-6 text-center hover:bg-indigo-50 transition-colors">
              <div className="text-2xl font-bold text-indigo-600 mb-1">Scalable</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider">Architecture</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}