import { IPackage } from "@/interface";
import { useState } from "react";

const PackageList = ({ packages }: { packages: IPackage[] }) => {
  const [selectedTab, setSelectedTab] = useState<string>("ugc");
  const [selectedContentType, setSelectedContentType] = useState<string>("video");

  const renderTabButton = (tab: string) => (
    <button
      key={tab}
      onClick={() => handleTabClick(tab)}
      className={`flex-1 rounded-${tab === "ugc" ? "s" : "e"
        }-xl ${selectedTab === tab ? "bg-[#0014BC] text-white" : "text-black bg-white"
        }`}
    >
      {tab === "ugc" ? "UGC" : "Affiliate"}
    </button>
  );

  const handleTabClick = (tab: string) => {
    setSelectedTab(tab);
  };

  const handleContentTypeClick = (contentType: string) => {
    setSelectedContentType(contentType);
  };

  const filteredPackages = packages.filter(
    (pkg) =>
      pkg.packageType === selectedTab && pkg.contentType === selectedContentType
  );

  return (
    <div>
      <div className="h-14 flex">
        {["ugc", "affiliate"].map(renderTabButton)}
      </div>
      <div className="mt-5 flex gap-5 px-4">
        {["video", "photo"].map((contentType) => (
          <button
            key={contentType}
            onClick={() => handleContentTypeClick(contentType)}
            className={`text-lg ${selectedContentType === contentType
              ? "text-black border-b-[3px] border-[#0014BC]"
              : "text-gray-600"
              }`}
          >
            {contentType.charAt(0).toUpperCase() + contentType.slice(1)}
          </button>
        ))}
      </div>
      <div className="px-2">
        {filteredPackages.length > 0 ? (
          filteredPackages.map((pkg) => (
            <div key={pkg.title} className="mt-2">
              <div className="flex items-center justify-between pt-5">
                <h2 className="font-semibold text-lg">{pkg.title}</h2>
                <p className="text-lg">USD {pkg.price}</p>
              </div>
              <ul className="ml-6 package-list">
                {pkg.services.map((service) => (
                  <li key={service} className="my-3">
                    {service}
                  </li>
                ))}
              </ul>
            </div>
          ))
        ) : (
          <div className="mt-2">
            <p className="m-3 text-2xl">Not available</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PackageList;
