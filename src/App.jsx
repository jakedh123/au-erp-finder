import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';

const erpData = [
  {
    name: 'MYOB',
    website: 'https://www.myob.com/au',
    staffCount: 2000,
    description: 'Cloud-based business management software'
  },
  {
    name: 'SAP Australia',
    website: 'https://www.sap.com/australia',
    staffCount: 1500,
    description: 'Enterprise software solutions'
  },
  {
    name: 'Oracle NetSuite Australia',
    website: 'https://www.netsuite.com.au',
    staffCount: 800,
    description: 'Cloud ERP software'
  },
  {
    name: 'TechnologyOne',
    website: 'https://www.technologyonecorp.com',
    staffCount: 1200,
    description: 'Enterprise software as a service'
  },
  {
    name: 'Pronto Software',
    website: 'https://www.pronto.net',
    staffCount: 400,
    description: 'Integrated ERP software'
  }
];

const App = () => {
  const [staffFilter, setStaffFilter] = useState(0);

  const filteredErps = erpData.filter(erp => erp.staffCount >= staffFilter);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Australian ERP Finder</h1>
        
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Filter by Staff Count</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Slider
                defaultValue={[0]}
                max={2000}
                step={100}
                onValueChange={(value) => setStaffFilter(value[0])}
              />
              <p className="text-sm text-gray-600">Minimum Staff Count: {staffFilter}</p>
            </div>
          </CardContent>
        </Card>

        <div className="grid gap-4">
          {filteredErps.map(erp => (
            <Card key={erp.name}>
              <CardHeader>
                <CardTitle>{erp.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p><strong>Staff Count:</strong> {erp.staffCount}</p>
                  <p><strong>Description:</strong> {erp.description}</p>
                  <a 
                    href={erp.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    Visit Website
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;