import { useAppDispatch, useAppSelector } from '@/Redux/Hooks';
import { setCreatedData } from '@/Redux/Reducers/ProjectSlice';
import { ProjectInitialValue } from '@/Types/ProjectType';
import { useRouter } from 'next/navigation'
import { Formik, Form } from "formik";
import React from 'react'
import { NewProjectInitialValue, NewProjectValidation } from '@/Data/Project';
import TitleAndClientSection from './TitleAndClientSection';
import ProjectSection from './ProjectSection';
import { DateSection } from './DateSection';
import { DescriptionSection } from './DescriptionSection';
import UploadProjectFile from './UploadProjectFile';
import { ButtonSection } from './ButtonSection';

const CreateNewProjectForm = () => {

    const router = useRouter();
    const {createdFormData} = useAppSelector((state) => state.project);
    const dispatch = useAppDispatch();
    const randomValue = Math.floor(Math.random() * (100 - 10 + 1)) + 10;

     const projectSubmit = (values: ProjectInitialValue) => {
        const submittedData = {
      id: randomValue.toString(),
      title: values.title,
      badge: values.progress === 100 ? "Done" : "Doing",
      image: "3.jpg",
      sites: "Themeforest, australia",
      description: "Cairo Admin is a full featured, multipurpose, premium bootstrap admin template.",
      issue: randomValue.toString(),
      resolved: randomValue.toString(),
      comment: randomValue.toString(),
      like: randomValue.toString(),
      customers_img1: "3.jpg",
      customers_img2: "5.jpg",
      customers_img3: "1.jpg",
      progress: values.progress,
      projectLevel: values.progress,
     }
     dispatch(setCreatedData([...createdFormData, submittedData]));
     router.push(`/project/project_list`);
     }
  return (
    <Formik initialValues={NewProjectInitialValue} validationSchema={NewProjectValidation} onSubmit={projectSubmit}>
        {() => (
            <Form className='theme-form'>
                <TitleAndClientSection />
                <ProjectSection />
                <DateSection />
                <DescriptionSection />
                <UploadProjectFile />
                <ButtonSection />
            </Form>
        )}
    </Formik>
  )
}

export default CreateNewProjectForm
