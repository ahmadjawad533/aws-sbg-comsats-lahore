import React, { useState, useMemo } from 'react';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';
import { resourcesData, RESOURCE_CATEGORIES, ResourceCategory } from '@/data/resources';
import { ResourceCard } from '@/components/cards/ResourceCard';
import { EmptyState } from '@/components/common/EmptyState';
import { BookMarked, Search, ExternalLink } from 'lucide-react';
import { cn } from '@/utils/cn';

export const ResourcesPage: React.FC = () => {
  useDocumentTitle(
    'Student Resource Hub',
    'Free learning roadmaps, official AWS documentation, developer tools, and community slide decks for COMSATS Lahore students.'
  );

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory | 'All'>('All');

  const filteredResources = useMemo(() => {
    return resourcesData.filter((item) => {
      if (selectedCategory !== 'All' && item.category !== selectedCategory) {
        return false;
      }

      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesDesc = item.description.toLowerCase().includes(q);
        const matchesCat = item.category.toLowerCase().includes(q);
        if (!matchesTitle && !matchesDesc && !matchesCat) return false;
      }

      return true;
    });
  }, [searchQuery, selectedCategory]);

  return (
    <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF9900]/10 border border-[#FF9900]/30 text-xs font-mono text-[#FF9900] mb-4">
          <BookMarked className="w-3.5 h-3.5" />
          <span>Curated Learning Directory</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
          Student Resource Hub
        </h1>
        <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
          Verified official documentation, free AWS training portals, developer toolkits, and workshop materials for university builders.
        </p>
      </div>

      {/* Search & Category Filter */}
      <div className="space-y-6 mb-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto scrollbar-none">
            <button
              onClick={() => setSelectedCategory('All')}
              className={cn(
                'px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-colors border',
                selectedCategory === 'All'
                  ? 'bg-[#FF9900] text-black border-[#FF9900] font-semibold'
                  : 'bg-[#0E131F] text-slate-300 border-white/10 hover:text-white'
              )}
            >
              All Resources
            </button>
            {RESOURCE_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={cn(
                  'px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap transition-colors border',
                  selectedCategory === cat
                    ? 'bg-[#FF9900] text-black border-[#FF9900] font-semibold'
                    : 'bg-[#0E131F] text-slate-300 border-white/10 hover:text-white'
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search resources..."
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-[#0E131F] border border-white/10 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-[#FF9900] focus:ring-1 focus:ring-[#FF9900]"
            />
          </div>
        </div>
      </div>

      {/* Resources Grid */}
      {filteredResources.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredResources.map((item) => (
            <ResourceCard key={item.id} resource={item} />
          ))}
        </div>
      ) : (
        <EmptyState
          title="No resources matched your search"
          description="Try clearing your search term or select another category."
          actionText="View All Resources"
          onAction={() => {
            setSearchQuery('');
            setSelectedCategory('All');
          }}
        />
      )}

      {/* Featured AWS Free Tier Spotlight */}
      <div className="p-8 rounded-3xl bg-gradient-to-r from-[#0E131F] via-[#141D2B] to-[#0E131F] border border-[#FF9900]/30 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <span className="text-xs font-mono uppercase text-[#FF9900] block mb-1">
            Student Recommendation
          </span>
          <h3 className="text-xl font-bold text-white mb-2">
            Build on AWS Without Overpaying: Free Tier Best Practices
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
            Always configure AWS Budgets and CloudWatch Billing Alarms before deploying resources. AWS Free Tier provides 12 months of free micro compute, 5GB of S3 storage, and monthly free Lambda invocations.
          </p>
        </div>

        <a
          href="https://aws.amazon.com/free/"
          target="_blank"
          rel="noopener noreferrer"
          className="shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#FF9900] text-black font-semibold text-xs sm:text-sm hover:bg-[#EC7211] transition-colors"
        >
          <span>Explore Free Tier</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
};
