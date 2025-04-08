"use client";
import { steps } from "./steps";
import Breadcrumbs from "./Breadcrumbs";
import { useSearchParams } from "next/navigation";
import Footer from "./Footer";
import { ResumeValues } from "@/lib/validation";
import { useState } from "react";
import ResumePreviewSection from "./ResumePreviewSection";
import { cn,mapToResumeValues } from "@/lib/utils";
import useUnloadWarning from "@/hooks/useUnloadWarning";
import useAutoSaveResume from "./useAutoSaveResume";
import { ResumeServerData } from "@/lib/types";


interface ResumeEditorProps {
  resumeToEdit: ResumeServerData | null;
}


export default function ResumeEditor({ resumeToEdit }: ResumeEditorProps){
  const searchParams = useSearchParams();
  const [resumeData, setResumeData] = useState<ResumeValues>(
    resumeToEdit ? mapToResumeValues(resumeToEdit) : {},
  );

  const currentStep = searchParams.get("step") || steps[0].key;

  const [showSmResumePreview, setShowSmResumePreview] = useState(false);

  const { isSaving, hasUnsavedChanges } = useAutoSaveResume(resumeData);

  useUnloadWarning(hasUnsavedChanges);

  function setStep(key: string) {
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("step", key);
    window.history.pushState(null, "", `?${newSearchParams.toString()}`);
  }

  const FormComponent = steps.find((step) => step.key === currentStep)?.component;


  return (
    <div className="flex grow flex-col">
      <header className="space-y-1.5 border-b px-3 py-5 text-center">
        <h1 className="text-2xl font-bold">Design Your Resume</h1>
        <p className="text-sm text-muted-foreground">
          Follow the steps below to create your resume. Your progress will save automatically.
        </p>
      </header>
      <main className="relative grow">
        <div className="absolute bottom-0 top-0 flex w-full">
          <div className={cn(
              "w-full space-y-6 overflow-y-auto p-3 md:block md:w-1/2",
              showSmResumePreview && "hidden",
            )}>
            <Breadcrumbs currentStep={currentStep} setCurrentStep={setStep} />
            {FormComponent && (
              <FormComponent
                resumeData={resumeData}
                setResumeData={setResumeData}
              />
            )}
          </div>
          <div className="grow border-r" />
           <ResumePreviewSection
           resumeData={resumeData}
           setResumeData={setResumeData}
           className={cn(showSmResumePreview && "flex")}
           />
        </div>
      </main>
      <Footer  currentStep={currentStep}
        setCurrentStep={setStep}
        showSmResumePreview={showSmResumePreview}
        setShowSmResumePreview={setShowSmResumePreview} 
        isSaving={isSaving}/>
    </div>
  );
}
