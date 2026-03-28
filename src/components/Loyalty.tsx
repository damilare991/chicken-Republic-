import React from 'react';
import { motion } from 'motion/react';
import { Gift, Trophy, History, Star, ArrowRight, Zap, Coffee, Utensils, Award, ShoppingCart } from 'lucide-react';
import { cn } from '../lib/utils';

const REWARDS = [
  { id: 'r1', name: 'Free 35cl Drink', points: 500, icon: Coffee, color: 'bg-blue-100 text-blue-600' },
  { id: 'r2', name: 'Extra Spicy Chicken Piece', points: 1000, icon: Utensils, color: 'bg-orange-100 text-orange-600' },
  { id: 'r3', name: 'Free Regular Chips', points: 1200, icon: Zap, color: 'bg-yellow-100 text-yellow-600' },
  { id: 'r4', name: 'Full Refuel Meal', points: 2500, icon: Award, color: 'bg-purple-100 text-purple-600' },
];

const HISTORY = [
  { id: 'h1', date: 'Mar 25, 2026', items: 'Citizen Meal + Extra Chicken', points: '+380', type: 'earned' },
  { id: 'h2', date: 'Mar 18, 2026', items: 'Free 35cl Drink', points: '-500', type: 'redeemed' },
  { id: 'h3', date: 'Mar 12, 2026', items: 'Family Bucket', points: '+1,250', type: 'earned' },
];

export const LoyaltyPage = () => {
  const currentPoints = 1250;
  const nextRewardPoints = 2500;
  const progress = (currentPoints / nextRewardPoints) * 100;

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white border-b border-gray-100 pt-12 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                Crispy Rewards
              </div>
              <h1 className="text-4xl md:text-5xl font-display font-black text-ink">
                Welcome back, <span className="text-primary">Favour!</span>
              </h1>
              <p className="text-gray-500 max-w-md">
                You're doing great! Keep enjoying your favorites and watch your points stack up for free meals.
              </p>
            </div>
            
            <div className="card p-8 bg-ink text-white w-full max-w-md relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
              <div className="relative z-10 space-y-6">
                <div className="flex justify-between items-center">
                  <p className="text-gray-400 font-bold text-sm uppercase tracking-wider">Current Balance</p>
                  <Trophy className="text-primary w-6 h-6" />
                </div>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-display font-black text-primary">{currentPoints.toLocaleString()}</span>
                  <span className="text-gray-400 font-bold">Points</span>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-xs font-bold">
                    <span className="text-gray-400">Progress to next reward</span>
                    <span className="text-primary">{Math.round(progress)}%</span>
                  </div>
                  <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-primary"
                    />
                  </div>
                  <p className="text-[10px] text-gray-500 text-center italic">
                    Only {nextRewardPoints - currentPoints} points away from a FREE Refuel Meal!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {/* How to Earn */}
        <section className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-3xl font-display font-black text-ink">How to Earn Points</h2>
            <p className="text-gray-500">It's simple: the more you eat, the more you earn!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: ShoppingCart, title: "Order Online", desc: "Earn 10 points for every ₦100 spent on our website or app." },
              { icon: Star, title: "Leave a Review", desc: "Get 50 points for every meal review you leave on our platform." },
              { icon: Gift, title: "Refer a Friend", desc: "Earn 500 points when your friend makes their first order." }
            ].map((item, idx) => (
              <div key={idx} className="card p-8 text-center space-y-4 hover:border-primary/30 transition-colors">
                <div className="w-14 h-14 bg-orange-50 text-primary rounded-2xl flex items-center justify-center mx-auto">
                  <item.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-display font-bold text-ink">{item.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Redeem Rewards */}
        <section className="space-y-12">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6">
            <div className="space-y-4">
              <h2 className="text-3xl font-display font-black text-ink">Redeem Rewards</h2>
              <p className="text-gray-500">Treat yourself! You've earned it.</p>
            </div>
            <div className="text-sm font-bold text-primary bg-primary/5 px-4 py-2 rounded-full border border-primary/10">
              Available Points: {currentPoints.toLocaleString()}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {REWARDS.map((reward) => (
              <div key={reward.id} className="card group relative overflow-hidden">
                <div className="p-6 space-y-6">
                  <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", reward.color)}>
                    <reward.icon className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-display font-bold text-ink leading-tight">{reward.name}</h4>
                    <p className="text-primary font-black text-sm">{reward.points} Points</p>
                  </div>
                  <button 
                    disabled={currentPoints < reward.points}
                    className={cn(
                      "w-full py-2.5 rounded-xl font-bold text-sm transition-all",
                      currentPoints >= reward.points 
                        ? "bg-primary text-white shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95" 
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    )}
                  >
                    {currentPoints >= reward.points ? "Redeem Now" : "Need More Points"}
                  </button>
                </div>
                {currentPoints < reward.points && (
                  <div className="absolute inset-0 bg-white/40 backdrop-blur-[1px] pointer-events-none"></div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Purchase History */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <History className="w-6 h-6 text-primary" />
            <h2 className="text-3xl font-display font-black text-ink">Recent Activity</h2>
          </div>
          
          <div className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-gray-400">Date</th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-gray-400">Activity</th>
                    <th className="px-6 py-4 text-xs font-black uppercase tracking-wider text-gray-400 text-right">Points</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {HISTORY.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50/50 transition-colors">
                      <td className="px-6 py-4 text-sm text-gray-500 font-medium">{item.date}</td>
                      <td className="px-6 py-4">
                        <p className="text-sm font-bold text-ink">{item.items}</p>
                        <p className="text-[10px] text-gray-400 uppercase font-black tracking-tighter">
                          {item.type === 'earned' ? 'Purchase Earned' : 'Reward Redeemed'}
                        </p>
                      </td>
                      <td className={cn(
                        "px-6 py-4 text-sm font-black text-right",
                        item.type === 'earned' ? 'text-green-600' : 'text-secondary'
                      )}>
                        {item.points}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="p-4 bg-gray-50 text-center">
              <button className="text-xs font-bold text-primary hover:underline">View Full History</button>
            </div>
          </div>
        </section>

        {/* Support Banner */}
        <section className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl font-display font-black text-ink">Have questions about your points?</h3>
            <p className="text-gray-500">Our support team is here to help you get the most out of Crispy Rewards.</p>
          </div>
          <button className="btn-secondary whitespace-nowrap">
            Chat with Support
          </button>
        </section>
      </div>
    </div>
  );
};
