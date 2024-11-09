import './App.css';
import CustomButton from './CustomButton';
import CustomList from './CustomList';
import CustomNav from './CustomNav';
import CustomTextarea from './CustomTextarea';

function App() {
  return (
    <>
      <h1>Custom Components Practice</h1>
      <CustomButton text="Click Me" bgcolor="cornflowerblue" alertMessage="you clicked me!" />
      <CustomList elements={['this', 'is', 'a', 'list']} bulletStyle="square" />
      <CustomNav links={['https://www.yale.edu/', 'https://yalecollege.yale.edu/', 'https://library.yale.edu/', 'https://yalehealth.yale.edu/']} linkTexts={['Yale', 'Yale College', 'Yale Library', 'Yale Health']} />
      <CustomTextarea text="Cut, copy, and paste are essential commands of modern human-computer interaction and user interface design. They offer an interprocess communication technique for transferring data through a computer's user interface. The cut command removes the selected data from its original position, and the copy command creates a duplicate; in both cases the selected data is kept in temporary storage called the clipboard. Clipboard data is later inserted wherever a paste command is issued. The data remains available to any application supporting the feature, thus allowing easy data transfer between applications." bgcolor="orange" />
    </>
  );
}

export default App;
