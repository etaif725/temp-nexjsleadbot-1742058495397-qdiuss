'use client'

import React, { useState } from "react";
import SectionBadge from "../ui/section-badge";

// Component to show input field
const InputField = ({
  label,
  value,
  setValue,
  className,
}: {
  label: string;
  value: string;
  setValue: (val: string) => void;
  className?: string;
}) => (
  <div className="mb-4">
    <label className="text-sm font-medium text-white/50">{label}</label>
    <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="mt-1 w-full px-3 py-2 border border-blue-700 rounded-md shadow-sm focus:outline-none focus:ring-blue-700 focus:border-blue-700 sm:text-sm text-gray-900"
    />
  </div>
);

// Card component for displaying report
const Card = ({ title, children, className }: { title: string; children: React.ReactNode; className?: string; }) => (
  <div className="bg-white shadow-md rounded-lg p-6 mb-4">
    <h3 className="text-xl font-semibold mb-4">{title}</h3>
    {children}
  </div>
);

// Main component
export const CostEstimator = () => {
  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [referral, setReferral] = useState("");
  const [dailyInteractions, setDailyInteractions] = useState<number>(0);
  const [agents, setAgents] = useState<number>(0);
  const [avgConversationTime, setAvgConversationTime] = useState<number>(0);
  const [grossSalesMonthly, setGrossSalesMonthly] = useState<number>(0);
  const [LeadBotSavings, setLeadBotSavings] = useState<number>(0);
  const [costEstimate, setCostEstimate] = useState<number | null>(null);
  const [breakdown, setBreakdown] = useState<{ [key: string]: number } | null>(null);
  const [prospect, setProspect] = useState<{ [key: string]: string } | null>(null);
  const [numberSalesEmployees, setnumberSalesEmployees] = useState<number>(0);
  const [avgSalesSalary, setavgSalesSalary] = useState<number>(0);
  const [totalCostLeads, settotalCostLeads] = useState<number>(0);
  const [LeadBotSavingsPercent, setLeadBotSavingsPercent] = useState<number>(0);
  const [employeesBreakdown, setEmployeesBreakdown] = useState<{ [key: string]: string } | null>(null);
  const [roiBreakdown] = useState<{ [key: string]: string } | null>(null);
  const [dailyCallAttempts, setdailyCallAttempts] = useState<number>(0);
  const [dailyAnswerRate, setdailyAnswerRate] = useState<number>(0);
  const [VatValue, setVatValue] = useState<number>(0);
  const [salesDiffWithLeadBot, setsalesDiffWithLeadBot] = useState<number>(0);
  const [avgLeadBotConversionRate, setavgLeadBotConversionRate] = useState<number>(0);

  const calculateCost = () => {
    
    let textAICostPerMessage, aiCallCostPerMin, baseCostPerMin;

    // Determine the pricing tier based on totalLeadCost monthly interactions
    if (dailyInteractions * 30 <= 1000) {
      textAICostPerMessage = 0.10;
      aiCallCostPerMin = 0.35;
      baseCostPerMin = 0.22;
    } else if (dailyInteractions * 30 <= 2500) {
      textAICostPerMessage = 0.08;
      aiCallCostPerMin = 0.28;
      baseCostPerMin = 0.22;
    } else if (dailyInteractions * 30 <= 5000) {
      textAICostPerMessage = 0.08;
      aiCallCostPerMin = 0.26;
      baseCostPerMin = 0.21;
    } else if (dailyInteractions * 30 <= 10000) {
      textAICostPerMessage = 0.06;
      aiCallCostPerMin = 0.23;
      baseCostPerMin = 0.21;
    } else {
      textAICostPerMessage = 0.06;
      aiCallCostPerMin = 0.26;
      baseCostPerMin = 0.21;
    }

    let VatFactor = 1.2436;
    let discountVal = 1-0.1;
    let DailyAnswerRate = dailyAnswerRate / 100;
    let successfulDailyTextInteractions = (dailyInteractions * DailyAnswerRate * 6)  + ( dailyInteractions * DailyAnswerRate );
    let successdailyAICallInteractions = (dailyInteractions * DailyAnswerRate * avgConversationTime) + (dailyInteractions * baseCostPerMin * dailyCallAttempts);
    let monthlyAICallInteractions = successdailyAICallInteractions * 22;
    let monthlyTextInteractions =  successfulDailyTextInteractions * 22;
    let monthlyTotalInteractions = monthlyAICallInteractions +  monthlyTextInteractions;

    // Cost calculation for text and AI calls
    let textAICost = monthlyTextInteractions * textAICostPerMessage;
    let aiCallCost = monthlyAICallInteractions * aiCallCostPerMin;
    let totalEmployeesSalaryCostMonthly = numberSalesEmployees * avgSalesSalary; 
    let totalExpensesCostMonthly = totalEmployeesSalaryCostMonthly + totalCostLeads;
    let subTotalCost = textAICost + aiCallCost;

    // Total cost calculation
    let devFees;
    if (subTotalCost * VatFactor <= 5479) {
      devFees = 5497;
    } else {
      devFees = 5497 * discountVal;
    }
    setCostEstimate(devFees);

    let totalCost = subTotalCost + devFees;

    // Calculate estimated monthly savings
    let grossSavingsDiff = totalEmployeesSalaryCostMonthly - (subTotalCost);
    let estimatedMonthlySavings = grossSavingsDiff;
    setLeadBotSavings(estimatedMonthlySavings);

    let estimatedMonthlySavingsPercent = ( grossSavingsDiff / totalEmployeesSalaryCostMonthly ) * 100;
    setLeadBotSavingsPercent(estimatedMonthlySavingsPercent);

    let salesDiffWithLeadBot = grossSalesMonthly * VatFactor;
    setsalesDiffWithLeadBot(salesDiffWithLeadBot);

    let VatValue = (salesDiffWithLeadBot / grossSalesMonthly);
    setVatValue(VatValue);

    let avgLeadBotConversionRate = VatValue;
    setavgLeadBotConversionRate(avgLeadBotConversionRate);

    // Set breakdown details
    setBreakdown({
      'Text Interactions Cost:': textAICost,
      [`Call Interactions Cost (${dailyAnswerRate}% AR):`]: aiCallCost,
      'Development + Setup Fee:': devFees,
      'Estimated Monthly Cost:': subTotalCost,
      'Total 1st month Payment:': totalCost,
    });

    setProspect({
      'First Name:': firstName,
      'Last Name:': lastName,
      'Phone:': phone,
      'Email:': email,
      'Company Name:': companyName,
    });

    setEmployeesBreakdown({
      '# of Sales Employees:': numberSalesEmployees.toFixed(0),
      'Sales Agent avg. Monthly Income:': `$${avgSalesSalary.toFixed(0)}`,
      'Employees Salary Cost Monthly:': `$${totalEmployeesSalaryCostMonthly.toFixed(0)}`,
      'Total Lead Cost Monthly:': `$${totalCostLeads.toFixed(0)}`,
      'Total Monthly Sales Cost:': `$${totalExpensesCostMonthly.toFixed(0)}`,
    });
  };

  const handleNext = () => {
    if (step === 3) {
      calculateCost();
      sendWebhookData();
    }
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const sendWebhookData = async () => {
    const webhookUrl = "YOUR_WEBHOOK_URL"; // Replace with your webhook URL
    const payload = {
      step,
      firstName,
      lastName,
      phone,
      email,
      companyName,
      referral,
      dailyInteractions,
      agents,
      avgConversationTime,
      grossSalesMonthly,
      LeadBotSavings,
      costEstimate,
      breakdown,
      prospect,
      numberSalesEmployees,
      avgSalesSalary,
      totalCostLeads,
      LeadBotSavingsPercent,
      employeesBreakdown,
      roiBreakdown,
    };

    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      console.log("Data sent successfully");
    } catch (error) {
      console.error("Error sending data:", error);
    }
  };

  return (
      <div className="items-center justify-center h-full">
        <div className="pb-4 w-full h-full text-center rounded-md text-sm font-medium">
          <div className="flex-col flex-grow justify-between">
            {step === 1 && (
              <div className="max-w-md md:mx-auto text-start md:text-center">
                <SectionBadge title="Estimate Cost by Usage" />
                <h2 className="text-2xl font-semibold mt-6">
                  Step 1: Basic Information
                </h2>
                <p className="text-muted-foreground mt-6 mb-12">
                  Lets start by providing some basic information about your company.
                </p>
                <div className="text-black">
                  <InputField
                    label="First Name"
                    value={firstName}
                    setValue={setFirstName}
                  />
                  <InputField
                    label="Last Name"
                    value={lastName}
                    setValue={setLastName}
                  />
                  <InputField label="Phone" value={phone} setValue={setPhone} />
                  <InputField
                    label="Company Email"
                    value={email}
                    setValue={setEmail}
                  />
                  <InputField
                    label="Company Name"
                    value={companyName}
                    setValue={setCompanyName}
                  />
                  <InputField
                    label="How did you hear about us?"
                    value={referral}
                    setValue={setReferral}
                  />
                </div>
              </div>
            )}
            {step === 2 && (
              <div className="max-w-md md:mx-auto text-start md:text-center">
                <SectionBadge title="Estimate Cost by Usage" />
                <h2 className="text-2xl font-semibold mt-6">
                  Step 2: AI Automation Needs
                </h2>
                <p className="text-muted-foreground mt-6 mb-12">
                  Reply only with digits, no $ signs or % signs.
                </p>
                <div className="text-black">
                  <InputField
                    label="How many leads LeadBot will Call or Chat with each day? For example, 100 leads per day."
                    value={String(dailyInteractions)}
                    setValue={(val) => setDailyInteractions(Number(val))}
                  />
                  <InputField
                    label="How many Attempts LeadBot will Make per Lead per day? For example, 3 attempts per lead per day."
                    value={String(dailyCallAttempts)}
                    setValue={(val) => setdailyCallAttempts(Number(val))}
                  />
                  <InputField
                    label="What is the average answer rate? For example, 7 people answered out of 100 calls per day."
                    value={String(dailyAnswerRate)}
                    setValue={(val) => setdailyAnswerRate(Number(val))}
                  />
                  <InputField
                    label="Number of AI Voice Agents"
                    value={String(agents)}
                    setValue={(val) => setAgents(Number(val))}
                  />
                  <InputField
                    label="Average Conversation Time (minutes)"
                    value={String(avgConversationTime)}
                    setValue={(val) => setAvgConversationTime(Number(val))}
                  />
                </div>
              </div>
            )}
            {step === 3 && (
              <div className="max-w-md md:mx-auto text-start md:text-center">
                <SectionBadge title="Estimate Cost by Usage" />
                <h2 className="text-2xl font-semibold mt-6">
                  Step 3: See how much you save with LeadBot AI
                </h2>
                <p className="text-muted-foreground mt-6 mb-12">
                  Again, please reply only with digits, no $ signs or % signs.
                </p>
                <div className="text-black w-full">
                  <InputField
                    label="How many Sales agents do you currently have?"
                    value={String(numberSalesEmployees)}
                    setValue={(val) => setnumberSalesEmployees(Number(val))}
                  />
                  <InputField
                    label="What Is the Avg. Salary per Agent?"
                    value={String(avgSalesSalary)}
                    setValue={(val) => setavgSalesSalary(Number(val))}
                  />
                  <InputField
                    label="How Much Do You Spend on Lead-Gen/Buy per Month?"
                    value={String(totalCostLeads)}
                    setValue={(val) => settotalCostLeads(Number(val))}
                  />
                  <InputField
                    label="What Is Your Gross Monthly Sales?"
                    value={String(grossSalesMonthly)}
                    setValue={(val) => setGrossSalesMonthly(Number(val))}
                  />
                </div>
              </div>
            )}
            {step === 4 && (
              <div className="max-w-md md:mx-auto text-start md:text-center">
                <SectionBadge title="Cost Estimate & Savings" />
                <h2 className="text-2xl font-semibold mt-6">
                  Cost Estimate and Savings Report
                </h2>
                <p className="text-muted-foreground mt-6 mb-12">
                  Here&apos;s your cost estimate and potential savings report.<br /> <br />
                  <b>NOTICE: This is a rough estimate to represent 100% Engagement / Answer Rate and may vary based on your actual usage.</b>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-1 gap-4 text-black bg-gray-950">
                  <Card title=":: Client Details">
                    {prospect && (
                      <ul className="list-disc">
                        {Object.entries(prospect).map(([key, value]) => (
                          <li key={key} className="flex flex-row justify-between">
                            <span>{key}</span>
                            <span><b>{value}</b></span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </Card>
                  <Card title=":: LeadBot AI Estimate">
                    {breakdown && (
                      <ul className="list-disc">
                        {Object.entries(breakdown).map(([key, value]) => (
                          <li key={key} className="flex flex-row justify-between">
                            <span>{key}</span>
                            <span><b>${value.toFixed(2)}</b></span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </Card>
                  <Card title=":: Employees Breakdown">
                    {employeesBreakdown && (
                      <ul className="list-disc">
                        {Object.entries(employeesBreakdown).map(([key, value]) => (
                          <li key={key} className="flex justify-between">
                            <span>{key}</span>
                            <span><b>{value}</b></span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </Card> 
                  {/* <Card title=":: ROI Breakdown">
                    {roiBreakdown && (
                      <ul className="list-disc pl-5">
                        {Object.entries(roiBreakdown).map(([key, value]) => (
                          <li key={key} className="flex flex-row justify-between">
                            <span>{key}</span>
                            <span>${value}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </Card> */}
                  <Card title=":: Save with LeadBot AI">
                    {LeadBotSavings !== null && LeadBotSavingsPercent !== null && (
                      <div>
                        <p className="flex flex-row justify-between mt-2">
                          <span>Potential Savings on Employees:</span>
                          <span><b>${LeadBotSavings.toFixed(2)}</b></span>
                        </p>
                        <p className="flex flex-row justify-between mt-2">
                          <span>Percentage Saved:</span>
                          <span><b>{LeadBotSavingsPercent.toFixed(2)}%</b></span>
                        </p>
                        <p className="flex flex-row justify-between mt-2">
                          <span>Your Gross Sales Currently:</span>
                          <span><b>${grossSalesMonthly.toFixed(2)}</b></span>
                        </p> 
                        <p className="flex flex-row justify-between mt-2">
                          <span>Gross Sales with LeadBot:</span>
                          <span><b>${(salesDiffWithLeadBot).toFixed(2)}</b></span>
                        </p>
                        <p className="flex flex-row justify-between mt-2">
                          <span>Avg. LeadBot Conversion Rate:</span>
                          <span><b>{avgLeadBotConversionRate.toFixed(2)}%</b></span>
                        </p>
                      </div>
                    )}
                  </Card>
                </div>
              </div>
            )}
            <div className="mt-8 grid grid-cols-2 w-full items-center justify-center gap-6">
              {step > 1 && (
                <button
                  onClick={handleBack}
                  className="items-center justify-center bg-blue-700 text-white py-2 px-4 rounded"
                >
                  Go Back
                </button>
              )}
              {step === 4 && (
                <button
                  onClick={() => window.location.href = 'https://api.ryseupsolutionsllc.com/widget/booking/jJQq6UkK5GhRam7F0lS9'}
                  className="items-center justify-center bg-blue-700 text-white py-2 px-4 rounded"
                >
                  Book a Demo
                </button>
              )}
              {step === 3 && (
                <button
                  onClick={handleNext}
                  className="items-center justify-center bg-blue-700 text-white py-2 px-4 rounded"
                > 
                  Get an Estimate
                </button>
              )}
              {step < 3 && (
                <button
                  onClick={handleNext}
                  className="items-center justify-center bg-blue-700 text-white py-2 px-4 rounded"
                >
                  Next
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
  );
};
