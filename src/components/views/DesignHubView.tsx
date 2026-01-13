"use client";

import React, { useState } from "react";
import DesignHubHeader from "@/components/sections/DesignHubHeader";
import DesignGrid from "@/components/sections/DesignGrid";
import CreateWithAIModal from "@/components/sections/CreateWithAIModal";

interface DesignHubViewProps {
  searchQuery: string;
}

const DesignHubView = ({ searchQuery }: DesignHubViewProps) => {
  const [activeScenario, setActiveScenario] = useState("All");
  const [activeSort, setActiveSort] = useState("All");
  const [isAIModalOpen, setIsAIModalOpen] = useState(false);

  return (
    <>
      <DesignHubHeader 
        activeScenario={activeScenario}
        setActiveScenario={setActiveScenario}
        activeSort={activeSort}
        setActiveSort={setActiveSort}
        onOpenAIModal={() => setIsAIModalOpen(true)}
      />
      <div className="px-4 md:px-10 pb-10">
        <DesignGrid 
          searchQuery={searchQuery}
          activeScenario={activeScenario}
          activeSort={activeSort}
        />
      </div>
      <CreateWithAIModal 
        isOpen={isAIModalOpen} 
        onClose={() => setIsAIModalOpen(false)} 
      />
    </>
  );
};

export default DesignHubView;
