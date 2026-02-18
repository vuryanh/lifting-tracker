  // Save templates to storage and update state
  const saveTemplates = async (updatedTemplates) => {
import React, { useState, useEffect } from 'react';
import { Camera, Dumbbell, TrendingUp, Calendar, Plus, X, BarChart3, Copy, Sun, Moon, Trash2, Download, Award, Zap } from 'lucide-react';
    try {
      await window.storage.set('templates', JSON.stringify(updatedTemplates));
      setTemplates(updatedTemplates);
    } catch (error) {
      console.error('Error saving templates:', error);
    }
  };

const LiftingTracker = () => {
  const exerciseInstructions = {
    // Chest
    "Bench Press": "Lie flat on bench, grip bar slightly wider than shoulders. Lower bar to mid-chest, press up explosively. Keep feet flat, maintain arch in lower back.",
    "Incline Bench Press": "Set bench to 30-45 degrees. Similar to flat bench but targets upper chest. Bar should come down to upper chest area.",
    "Decline Bench Press": "Set bench to decline position. Targets lower chest. Maintain control throughout the movement.",
    "Dumbbell Press": "Lie flat with dumbbells at chest level. Press up and slightly together at top. More range of motion than barbell.",
    "Incline Dumbbell Press": "Perform on incline bench. Start with dumbbells at shoulder level, press up and together. Emphasizes upper chest.",
    "Chest Fly": "Lie flat with dumbbells extended above chest. Lower weights out to sides with slight bend in elbows. Squeeze chest at top.",
    "Cable Fly": "Stand between cable machines, slight forward lean. Bring handles together in front of chest. Constant tension throughout.",
    "Push-ups": "Start in plank position, hands shoulder-width. Lower chest to ground, push back up. Keep core tight, body straight.",
    // Back
    "Deadlift": "Stand with feet hip-width, bar over mid-foot. Hinge at hips, grip bar. Drive through heels, extend hips and knees together. Keep back neutral.",
    "Barbell Row": "Hinge at hips, back flat. Pull bar to lower chest/upper abs. Squeeze shoulder blades together. Control the descent.",
    "Dumbbell Row": "One hand and knee on bench for support. Pull dumbbell to hip, elbow close to body. Focus on lat contraction.",
    "Lat Pulldown": "Grip bar wider than shoulders. Pull bar to upper chest while keeping torso upright. Squeeze lats at bottom.",
    "Pull-ups": "Hang from bar with overhand grip. Pull chin over bar by engaging lats. Lower with control. Scale with bands if needed.",
    "Chin-ups": "Similar to pull-ups but underhand grip. Slightly more bicep involvement. Great for building pulling strength.",
    "Seated Cable Row": "Sit upright, grip handles. Pull to lower chest, squeeze shoulder blades. Avoid using momentum.",
    "T-Bar Row": "Straddle bar, hinge at hips. Pull bar to chest with elbows tight. Excellent for mid-back thickness.",
    "Face Pulls": "High cable with rope attachment. Pull towards face, rotate hands out. Targets rear delts and upper back.",
    // Shoulders
    "Overhead Press": "Stand or sit, bar at shoulders. Press overhead to lockout. Keep core tight. Can be done with barbell or dumbbells.",
    "Arnold Press": "Start with dumbbells at shoulders, palms facing you. Press up while rotating palms forward. Unique rotation hits all delt heads.",
    "Lateral Raise": "Stand with dumbbells at sides. Raise arms to shoulder height, slight forward angle. Lead with elbows, not hands.",
    "Front Raise": "Hold dumbbells in front of thighs. Raise straight ahead to shoulder height. Alternate arms or do together.",
    "Rear Delt Fly": "Bent over or on incline bench face down. Raise dumbbells out to sides. Focus on rear delts, not traps.",
    "Shrugs": "Hold heavy dumbbells or barbell. Raise shoulders straight up towards ears. Brief pause at top, controlled descent.",
    "Upright Row": "Narrow grip on bar. Pull up along body to chest level. Elbows lead, stay higher than hands.",
    // Legs
    "Squat": "Bar on upper back, feet shoulder-width. Descend until thighs parallel or below. Drive through heels to stand. Keep chest up.",
    "Front Squat": "Bar rests on front delts. More upright torso than back squat. Emphasizes quads and core stability.",
    "Leg Press": "Feet shoulder-width on platform. Lower until knees at 90 degrees. Press through heels. Don't lock out completely.",
    "Lunges": "Step forward into lunge position. Lower back knee towards ground. Push through front heel to return. Alternate legs.",
    "Bulgarian Split Squat": "Rear foot elevated on bench. Lower into split squat position. Excellent for single-leg strength and balance.",
    "Leg Extension": "Sit with ankles under pad. Extend legs to straight position. Squeeze quads at top. Control the descent.",
    "Leg Curl": "Lie face down, ankles under pad. Curl heels towards glutes. Squeeze hamstrings at top. Avoid lifting hips.",
    "Romanian Deadlift": "Stand with bar at thighs. Hinge at hips, slight knee bend. Lower bar along legs until stretch in hamstrings. Drive hips forward.",
    "Calf Raise": "Stand on edge of step or platform. Lower heels below platform. Rise up on toes as high as possible. Can be done single or double leg.",
    // Arms
    "Barbell Curl": "Stand with bar at arms length. Curl bar to shoulders keeping elbows stationary. Lower with control. Don't swing.",
    "Dumbbell Curl": "Stand with dumbbells at sides. Curl up, rotate palms up as you lift. Can be done alternating or together.",
    "Hammer Curl": "Hold dumbbells with neutral grip (palms facing each other). Curl up while maintaining grip position. Targets brachialis.",
    "Preacher Curl": "Arms over preacher bench pad. Curl bar or dumbbells towards shoulders. Isolates biceps, prevents cheating.",
    "Tricep Pushdown": "Stand at cable machine. Push bar or rope down by extending elbows. Keep upper arms stationary. Full extension at bottom.",
    "Overhead Tricep Extension": "Hold dumbbell or rope overhead. Lower behind head by bending elbows. Extend back to start. Stretches long head of tricep.",
    "Skull Crushers": "Lie on bench with bar overhead. Lower bar to forehead by bending elbows. Extend back up. Keep upper arms vertical.",
    "Dips": "Support yourself on parallel bars. Lower body by bending elbows to 90 degrees. Press back up. Lean forward for chest, upright for triceps.",
    // Core
    "Plank": "Forearms and toes on ground, body straight. Hold position engaging core. Don't let hips sag or pike up. Breathe normally.",
    "Crunches": "Lie on back, knees bent. Curl shoulders off ground towards knees. Focus on contracting abs, not pulling neck.",
    "Hanging Leg Raise": "Hang from pull-up bar. Raise legs towards chest, keeping them straight or bent. Control the descent. Avoid swinging.",
    "Russian Twist": "Sit on ground, lean back slightly. Rotate torso side to side, touching ground beside hips. Can hold weight for added difficulty.",
    "Cable Crunch": "Kneel facing cable machine with rope attachment. Crunch down bringing elbows towards knees. Flex abs hard at bottom."
  };

  const exerciseTargets = {
    // Chest
    "Bench Press": ["Chest", "Triceps", "Shoulders"],
    "Incline Bench Press": ["Upper Chest", "Shoulders", "Triceps"],
    "Decline Bench Press": ["Lower Chest", "Triceps"],
    "Dumbbell Press": ["Chest", "Triceps", "Shoulders"],
    "Incline Dumbbell Press": ["Upper Chest", "Shoulders"],
    "Chest Fly": ["Chest"],
    "Cable Fly": ["Chest"],
    "Push-ups": ["Chest", "Triceps", "Core"],
    // Back
    "Deadlift": ["Back", "Hamstrings", "Glutes", "Core"],
    "Barbell Row": ["Back", "Biceps"],
    "Dumbbell Row": ["Back", "Biceps"],
    "Lat Pulldown": ["Lats", "Biceps"],
    "Pull-ups": ["Lats", "Biceps", "Core"],
    "Chin-ups": ["Lats", "Biceps"],
    "Seated Cable Row": ["Back", "Biceps"],
    "T-Bar Row": ["Back", "Biceps"],
    "Face Pulls": ["Rear Delts", "Upper Back"],
    // Shoulders
    "Overhead Press": ["Shoulders", "Triceps", "Core"],
    "Arnold Press": ["Shoulders", "Triceps"],
    "Lateral Raise": ["Side Delts"],
    "Front Raise": ["Front Delts"],
    "Rear Delt Fly": ["Rear Delts"],
    "Shrugs": ["Traps"],
    "Upright Row": ["Shoulders", "Traps"],
    // Legs
    "Squat": ["Quads", "Glutes", "Core"],
    "Front Squat": ["Quads", "Core"],
    "Leg Press": ["Quads", "Glutes"],
    "Lunges": ["Quads", "Glutes"],
    "Bulgarian Split Squat": ["Quads", "Glutes"],
    "Leg Extension": ["Quads"],
    "Leg Curl": ["Hamstrings"],
    "Romanian Deadlift": ["Hamstrings", "Glutes", "Back"],
    "Calf Raise": ["Calves"],
    // Arms
    "Barbell Curl": ["Biceps"],
    "Dumbbell Curl": ["Biceps"],
    "Hammer Curl": ["Biceps", "Forearms"],
    "Preacher Curl": ["Biceps"],
    "Tricep Pushdown": ["Triceps"],
    "Overhead Tricep Extension": ["Triceps"],
    "Skull Crushers": ["Triceps"],
    "Dips": ["Triceps", "Chest"],
    // Core
    "Plank": ["Core"],
    "Crunches": ["Abs"],
    "Hanging Leg Raise": ["Abs", "Core"],
    "Russian Twist": ["Abs", "Obliques"],
    "Cable Crunch": ["Abs"]
  };

  const presetWorkouts = {
    // Strength Training
    "Full Body Strength": {
      description: "Build overall strength with compound movements",
      goals: ["Strength", "Muscle Building"],
      exercises: [
        { name: "Squat", sets: "4", reps: "6", weight: "", isSuperset: false },
        { name: "Bench Press", sets: "4", reps: "6", weight: "", isSuperset: false },
        { name: "Deadlift", sets: "3", reps: "5", weight: "", isSuperset: false },
        { name: "Overhead Press", sets: "3", reps: "8", weight: "", isSuperset: false },
        { name: "Barbell Row", sets: "4", reps: "8", weight: "", isSuperset: false }
      ]
    },
    "Upper Body Strength": {
      description: "Focus on upper body compound movements",
      goals: ["Strength", "Muscle Building"],
      exercises: [
        { name: "Bench Press", sets: "5", reps: "5", weight: "", isSuperset: false },
        { name: "Barbell Row", sets: "5", reps: "5", weight: "", isSuperset: false },
        { name: "Overhead Press", sets: "4", reps: "6", weight: "", isSuperset: false },
        { name: "Pull-ups", sets: "3", reps: "8", weight: "", isSuperset: false },
        { name: "Dips", sets: "3", reps: "8", weight: "", isSuperset: false }
      ]
    },
    "Lower Body Strength": {
      description: "Build powerful legs and posterior chain",
      goals: ["Strength", "Muscle Building"],
      exercises: [
        { name: "Squat", sets: "5", reps: "5", weight: "", isSuperset: false },
        { name: "Deadlift", sets: "4", reps: "5", weight: "", isSuperset: false },
        { name: "Front Squat", sets: "3", reps: "8", weight: "", isSuperset: false },
        { name: "Romanian Deadlift", sets: "3", reps: "10", weight: "", isSuperset: false },
        { name: "Calf Raise", sets: "4", reps: "15", weight: "", isSuperset: false }
      ]
    },
    // Hypertrophy (Muscle Building)
    "Push Day": {
      description: "Chest, shoulders, and triceps volume workout",
      goals: ["Muscle Building", "Aesthetics"],
      exercises: [
        { name: "Bench Press", sets: "4", reps: "8-10", weight: "", isSuperset: false },
        { name: "Incline Dumbbell Press", sets: "3", reps: "10-12", weight: "", isSuperset: false },
        { name: "Overhead Press", sets: "3", reps: "8-10", weight: "", isSuperset: false },
        { name: "Lateral Raise", sets: "3", reps: "12-15", weight: "", isSuperset: true },
        { name: "Tricep Pushdown", sets: "3", reps: "12-15", weight: "", isSuperset: true },
        { name: "Overhead Tricep Extension", sets: "3", reps: "12-15", weight: "", isSuperset: false }
      ]
    },
    "Pull Day": {
      description: "Back and biceps volume workout",
      goals: ["Muscle Building", "Aesthetics"],
      exercises: [
        { name: "Deadlift", sets: "4", reps: "6-8", weight: "", isSuperset: false },
        { name: "Pull-ups", sets: "3", reps: "8-10", weight: "", isSuperset: false },
        { name: "Barbell Row", sets: "4", reps: "8-10", weight: "", isSuperset: false },
        { name: "Lat Pulldown", sets: "3", reps: "10-12", weight: "", isSuperset: false },
        { name: "Face Pulls", sets: "3", reps: "15-20", weight: "", isSuperset: true },
        { name: "Barbell Curl", sets: "3", reps: "10-12", weight: "", isSuperset: true },
        { name: "Hammer Curl", sets: "3", reps: "12-15", weight: "", isSuperset: false }
      ]
    },
    "Leg Day": {
      description: "Complete lower body hypertrophy session",
      goals: ["Muscle Building", "Aesthetics"],
      exercises: [
        { name: "Squat", sets: "4", reps: "8-10", weight: "", isSuperset: false },
        { name: "Romanian Deadlift", sets: "3", reps: "10-12", weight: "", isSuperset: false },
        { name: "Leg Press", sets: "3", reps: "12-15", weight: "", isSuperset: false },
        { name: "Leg Curl", sets: "3", reps: "12-15", weight: "", isSuperset: true },
        { name: "Leg Extension", sets: "3", reps: "12-15", weight: "", isSuperset: true },
        { name: "Calf Raise", sets: "4", reps: "15-20", weight: "", isSuperset: false }
      ]
    },
    // Athletic Performance
    "Athletic Power": {
      description: "Explosive movements for sports performance",
      goals: ["Athletic Performance", "Strength"],
      exercises: [
        { name: "Squat", sets: "5", reps: "3", weight: "", isSuperset: false },
        { name: "Deadlift", sets: "4", reps: "3", weight: "", isSuperset: false },
        { name: "Push-ups", sets: "3", reps: "15", weight: "", isSuperset: true },
        { name: "Pull-ups", sets: "3", reps: "10", weight: "", isSuperset: true },
        { name: "Plank", sets: "3", reps: "60s", weight: "", isSuperset: false }
      ]
    },
    // Beginner
    "Beginner Full Body": {
      description: "Perfect starting point for new lifters",
      goals: ["Beginner Friendly", "General Fitness"],
      exercises: [
        { name: "Squat", sets: "3", reps: "10", weight: "", isSuperset: false },
        { name: "Push-ups", sets: "3", reps: "10", weight: "", isSuperset: false },
        { name: "Dumbbell Row", sets: "3", reps: "10", weight: "", isSuperset: false },
        { name: "Overhead Press", sets: "3", reps: "10", weight: "", isSuperset: false },
        { name: "Plank", sets: "3", reps: "30s", weight: "", isSuperset: false }
      ]
    },
    // Endurance/Conditioning
    "Conditioning Circuit": {
      description: "High volume for endurance and conditioning",
      goals: ["Endurance", "Fat Loss"],
      exercises: [
        { name: "Squat", sets: "3", reps: "15-20", weight: "", isSuperset: true },
        { name: "Push-ups", sets: "3", reps: "15-20", weight: "", isSuperset: true },
        { name: "Lunges", sets: "3", reps: "12-15", weight: "", isSuperset: true },
        { name: "Dumbbell Row", sets: "3", reps: "15", weight: "", isSuperset: true },
        { name: "Plank", sets: "3", reps: "45s", weight: "", isSuperset: true },
        { name: "Russian Twist", sets: "3", reps: "20", weight: "", isSuperset: true }
      ]
    },
    // Upper/Lower Split
    "Upper Body Hypertrophy": {
      description: "High volume upper body muscle building",
      goals: ["Muscle Building", "Aesthetics"],
      exercises: [
        { name: "Bench Press", sets: "4", reps: "8-10", weight: "", isSuperset: false },
        { name: "Barbell Row", sets: "4", reps: "8-10", weight: "", isSuperset: false },
        { name: "Incline Dumbbell Press", sets: "3", reps: "10-12", weight: "", isSuperset: false },
        { name: "Lat Pulldown", sets: "3", reps: "10-12", weight: "", isSuperset: false },
        { name: "Lateral Raise", sets: "3", reps: "12-15", weight: "", isSuperset: true },
        { name: "Barbell Curl", sets: "3", reps: "10-12", weight: "", isSuperset: true },
        { name: "Tricep Pushdown", sets: "3", reps: "12-15", weight: "", isSuperset: false }
      ]
    },
    "Lower Body Hypertrophy": {
      description: "High volume lower body muscle building",
      goals: ["Muscle Building", "Aesthetics"],
      exercises: [
        { name: "Squat", sets: "4", reps: "8-10", weight: "", isSuperset: false },
        { name: "Romanian Deadlift", sets: "4", reps: "10-12", weight: "", isSuperset: false },
        { name: "Leg Press", sets: "3", reps: "12-15", weight: "", isSuperset: false },
        { name: "Bulgarian Split Squat", sets: "3", reps: "10-12", weight: "", isSuperset: false },
        { name: "Leg Curl", sets: "3", reps: "12-15", weight: "", isSuperset: true },
        { name: "Calf Raise", sets: "4", reps: "15-20", weight: "", isSuperset: true }
      ]
    }
  };

  const fitnessGoals = [
    "Strength",
    "Muscle Building",
    "Athletic Performance",
    "Fat Loss",
    "Endurance",
    "Aesthetics",
    "Beginner Friendly",
    "General Fitness"
  ];

  const commonExercises = [
    // Chest
    "Bench Press", "Incline Bench Press", "Decline Bench Press", "Dumbbell Press", 
    "Incline Dumbbell Press", "Chest Fly", "Cable Fly", "Push-ups",
    // Back
    "Deadlift", "Barbell Row", "Dumbbell Row", "Lat Pulldown", "Pull-ups", 
    "Chin-ups", "Seated Cable Row", "T-Bar Row", "Face Pulls",
    // Shoulders
    "Overhead Press", "Arnold Press", "Lateral Raise", "Front Raise", 
    "Rear Delt Fly", "Shrugs", "Upright Row",
    // Legs
    "Squat", "Front Squat", "Leg Press", "Lunges", "Bulgarian Split Squat",
    "Leg Extension", "Leg Curl", "Romanian Deadlift", "Calf Raise",
    // Arms
    "Barbell Curl", "Dumbbell Curl", "Hammer Curl", "Preacher Curl",
    "Tricep Pushdown", "Overhead Tricep Extension", "Skull Crushers", "Dips",
    // Core
    "Plank", "Crunches", "Hanging Leg Raise", "Russian Twist", "Cable Crunch"
  ];

  const [workouts, setWorkouts] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [exerciseLibrary, setExerciseLibrary] = useState([]);
  const [templates, setTemplates] = useState([]);
  const [activeTab, setActiveTab] = useState('log');
  const [showAddWorkout, setShowAddWorkout] = useState(false);
  const [showExercisePicker, setShowExercisePicker] = useState(null);
  const [showTemplateModal, setShowTemplateModal] = useState(false);
  const [showGuideModal, setShowGuideModal] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [guideSearchQuery, setGuideSearchQuery] = useState('');
  const [showPresetModal, setShowPresetModal] = useState(false);
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [showPRModal, setShowPRModal] = useState(false);
  const [showExportModal, setShowExportModal] = useState(false);
  const [selectedExerciseForChart, setSelectedExerciseForChart] = useState(null);
  const [showSavePresetModal, setShowSavePresetModal] = useState(false);
  const [presetName, setPresetName] = useState('');
  const [presetDescription, setPresetDescription] = useState('');
  const [presetGoals, setPresetGoals] = useState([]);
  const [customPresets, setCustomPresets] = useState([]);
  const [templateName, setTemplateName] = useState('');
  const [darkMode, setDarkMode] = useState(true);
  const [swipingItem, setSwipingItem] = useState(null);
  const [swipeStart, setSwipeStart] = useState(0);
  const [newWorkout, setNewWorkout] = useState({
    date: new Date().toISOString().split('T')[0],
    exercises: [{ name: '', sets: '', reps: '', weight: '', isSuperset: false }],
    notes: ''
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const workoutsResult = await window.storage.get('workouts');
      const photosResult = await window.storage.get('photos');
      const libraryResult = await window.storage.get('exercise-library');
      const templatesResult = await window.storage.get('templates');
      const darkModeResult = await window.storage.get('dark-mode');
      
      if (workoutsResult?.value) {
        setWorkouts(JSON.parse(workoutsResult.value));
      }
      if (photosResult?.value) {
        setPhotos(JSON.parse(photosResult.value));
      }
      if (libraryResult?.value) {
        const savedLibrary = JSON.parse(libraryResult.value);
        // Merge common exercises with user's saved exercises
        const merged = [...new Set([...commonExercises, ...savedLibrary])];
        setExerciseLibrary(merged);
      } else {
        // First time - just use common exercises
        setExerciseLibrary(commonExercises);
      }
      if (templatesResult?.value) {
        setTemplates(JSON.parse(templatesResult.value));
      }
      if (darkModeResult?.value) {
        setDarkMode(JSON.parse(darkModeResult.value));
      }
    } catch (error) {
      console.log('No existing data or error loading:', error);
      setExerciseLibrary(commonExercises);
    }
  };

  const saveWorkouts = async (updatedWorkouts) => {
    try {
      await window.storage.set('workouts', JSON.stringify(updatedWorkouts));
      setWorkouts(updatedWorkouts);
    } catch (error) {
      console.error('Error saving workouts:', error);
    }
  };

  const savePhotos = async (updatedPhotos) => {
    try {
      await window.storage.set('photos', JSON.stringify(updatedPhotos));
      setPhotos(updatedPhotos);
    } catch (error) {
      console.error('Error saving photos:', error);
    }
  };

  const saveCustomPresets = async (updatedPresets) => {
    try {
      await window.storage.set('custom-presets', JSON.stringify(updatedPresets));
      setCustomPresets(updatedPresets);
    } catch (error) {
      console.error('Error saving custom presets:', error);
    }
  };

  const toggleDarkMode = async () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    try {
      await window.storage.set('dark-mode', JSON.stringify(newMode));
    } catch (error) {
      console.error('Error saving theme:', error);
    }
  };

  const addExercise = () => {
    setNewWorkout({
      ...newWorkout,
      exercises: [...newWorkout.exercises, { name: '', sets: '', reps: '', weight: '', isSuperset: false }]
    });
  };

  const updateExercise = (index, field, value) => {
    const updated = [...newWorkout.exercises];
    updated[index][field] = value;
    setNewWorkout({ ...newWorkout, exercises: updated });
  };

  const removeExercise = (index) => {
    const updated = newWorkout.exercises.filter((_, i) => i !== index);
    setNewWorkout({ ...newWorkout, exercises: updated });
  };

  const saveWorkout = () => {
    const workout = {
      id: Date.now(),
      date: newWorkout.date,
      exercises: newWorkout.exercises.filter(e => e.name),
      notes: newWorkout.notes
    };
    
    if (workout.exercises.length > 0) {
      // Add new custom exercise names to library
      const newCustomExercises = [];
      workout.exercises.forEach(ex => {
        if (ex.name && !exerciseLibrary.includes(ex.name)) {
          newCustomExercises.push(ex.name);
        }
      });
      
      if (newCustomExercises.length > 0) {
        const updatedLibrary = [...exerciseLibrary, ...newCustomExercises];
        setExerciseLibrary(updatedLibrary);
        // Only save custom exercises (not common ones) to storage
        const customOnly = updatedLibrary.filter(ex => !commonExercises.includes(ex));
        window.storage.set('exercise-library', JSON.stringify(customOnly)).catch(console.error);
      }
      
      saveWorkouts([workout, ...workouts]);
      setNewWorkout({
        date: new Date().toISOString().split('T')[0],
        exercises: [{ name: '', sets: '', reps: '', weight: '' }],
        notes: ''
      });
      setShowAddWorkout(false);
    }
  };

  const copyPreviousWorkout = () => {
    if (workouts.length > 0) {
      const lastWorkout = workouts[0];
      setNewWorkout({
        date: new Date().toISOString().split('T')[0],
        exercises: lastWorkout.exercises.map(e => ({ ...e })),
        notes: ''
      });
      setShowAddWorkout(true);
    }
  };

  const saveAsTemplate = () => {
    if (!templateName.trim()) return;
    
    const template = {
      id: Date.now(),
      name: templateName,
      exercises: newWorkout.exercises.filter(e => e.name)
    };
    
    if (template.exercises.length > 0) {
      saveTemplates([...templates, template]);
      setTemplateName('');
      setShowTemplateModal(false);
    }
  };

  const loadTemplate = (template) => {
    setNewWorkout({
      date: new Date().toISOString().split('T')[0],
      exercises: template.exercises.map(e => ({ ...e })),
      notes: ''
    });
    setShowAddWorkout(true);
  };

  const deleteTemplate = (id) => {
    saveTemplates(templates.filter(t => t.id !== id));
  };

  const handlePhotoUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const photo = {
          id: Date.now(),
          date: new Date().toISOString().split('T')[0],
          data: reader.result,
          notes: ''
        };
        savePhotos([photo, ...photos]);
      };
      reader.readAsDataURL(file);
    }
  };

  const deleteWorkout = (id) => {
    saveWorkouts(workouts.filter(w => w.id !== id));
  };

  const deletePhoto = (id) => {
    savePhotos(photos.filter(p => p.id !== id));
  };

  const selectExercise = (exerciseName, index) => {
    updateExercise(index, 'name', exerciseName);
    setShowExercisePicker(null);
  };

  const filteredExercises = (currentValue) => {
    if (!currentValue) return exerciseLibrary;
    return exerciseLibrary.filter(ex => 
      ex.toLowerCase().includes(currentValue.toLowerCase())
    );
  };

  const openGuide = (exerciseName) => {
    setSelectedExercise(exerciseName);
    setShowGuideModal(true);
  };

  const addExerciseFromGuide = (exerciseName) => {
    const newExercise = { name: exerciseName, sets: '', reps: '', weight: '', isSuperset: false };
    setNewWorkout({
      ...newWorkout,
      exercises: [...newWorkout.exercises, newExercise]
    });
    setShowGuideModal(false);
    setShowAddWorkout(true);
    setActiveTab('log');
  };

  const getLastExerciseStats = (exerciseName) => {
    if (!exerciseName) return null;
    
    // Find the most recent workout that includes this exercise
    for (const workout of workouts) {
      const exercise = workout.exercises.find(ex => ex.name === exerciseName);
      if (exercise) {
        return {
          date: workout.date,
          sets: exercise.sets,
          reps: exercise.reps,
          weight: exercise.weight
        };
      }
    }
    return null;
  };

  const filteredGuideExercises = commonExercises.filter(ex =>
    ex.toLowerCase().includes(guideSearchQuery.toLowerCase())
  );

  const toggleGoal = (goal) => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter(g => g !== goal));
    } else {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  const loadPresetWorkout = (presetName, isCustom = false) => {
    const preset = isCustom ? customPresets.find(p => p.name === presetName) : presetWorkouts[presetName];
    setNewWorkout({
      date: new Date().toISOString().split('T')[0],
      exercises: preset.exercises.map(e => ({ ...e })),
      notes: ''
    });
    setShowPresetModal(false);
    setShowAddWorkout(true);
    setActiveTab('log');
  };

  const getFilteredPresets = () => {
    const builtIn = Object.entries(presetWorkouts).map(([name, preset]) => ({
      name,
      ...preset,
      isCustom: false
    }));
    
    const custom = customPresets.map(preset => ({
      ...preset,
      isCustom: true
    }));
    
    const allPresets = [...custom, ...builtIn];
    
    if (selectedGoals.length === 0) {
      return allPresets;
    }
    
    return allPresets.filter(preset =>
      preset.goals.some(goal => selectedGoals.includes(goal))
    );
  };

  const saveAsPreset = () => {
    if (!presetName.trim()) return;
    
    const preset = {
      name: presetName,
      description: presetDescription || 'Custom workout',
      goals: presetGoals.length > 0 ? presetGoals : ['General Fitness'],
      exercises: newWorkout.exercises.filter(e => e.name)
    };
    
    if (preset.exercises.length > 0) {
      saveCustomPresets([...customPresets, preset]);
      setPresetName('');
      setPresetDescription('');
      setPresetGoals([]);
      setShowSavePresetModal(false);
      alert('Preset saved! You can now access it from Browse Preset Workouts.');
    }
  };

  const deleteCustomPreset = (presetName) => {
    saveCustomPresets(customPresets.filter(p => p.name !== presetName));
  };

  const togglePresetGoal = (goal) => {
    if (presetGoals.includes(goal)) {
      setPresetGoals(presetGoals.filter(g => g !== goal));
    } else {
      setPresetGoals([...presetGoals, goal]);
    }
  };

  // Export functionality
  const exportData = () => {
    const data = {
      workouts,
      photos: photos.map(p => ({ ...p, data: 'truncated' })), // Don't export full photo data
      templates,
      exerciseLibrary: exerciseLibrary.filter(ex => !commonExercises.includes(ex)),
      exportDate: new Date().toISOString()
    };
    
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lifting-tracker-backup-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const exportCSV = () => {
    const headers = ['Date', 'Exercise', 'Sets', 'Reps', 'Weight', 'Notes'];
    const rows = workouts.flatMap(workout =>
      workout.exercises.map(ex => [
        workout.date,
        ex.name,
        ex.sets,
        ex.reps,
        ex.weight,
        workout.notes || ''
      ])
    );
    
    const csv = [
      headers.join(','),
      ...rows.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');
    
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `lifting-tracker-${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const importData = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      try {
        const data = JSON.parse(e.target.result);
        
        // Merge imported data with existing data
        if (data.workouts) {
          const mergedWorkouts = [...workouts, ...data.workouts];
          // Remove duplicates by id
          const uniqueWorkouts = Array.from(
            new Map(mergedWorkouts.map(w => [w.id, w])).values()
          ).sort((a, b) => new Date(b.date) - new Date(a.date));
          await saveWorkouts(uniqueWorkouts);
        }
        
        if (data.templates) {
          const mergedTemplates = [...templates, ...data.templates];
          const uniqueTemplates = Array.from(
            new Map(mergedTemplates.map(t => [t.id, t])).values()
          );
          await saveTemplates(uniqueTemplates);
        }
        
        if (data.exerciseLibrary) {
          const mergedLibrary = [...exerciseLibrary, ...data.exerciseLibrary];
          const uniqueLibrary = [...new Set(mergedLibrary)];
          setExerciseLibrary(uniqueLibrary);
          const customOnly = uniqueLibrary.filter(ex => !commonExercises.includes(ex));
          await window.storage.set('exercise-library', JSON.stringify(customOnly));
        }
        
        alert('Data imported successfully! Your existing data has been preserved and merged with the import.');
        setShowExportModal(false);
      } catch (error) {
        alert('Error importing data. Make sure you selected a valid backup file.');
        console.error('Import error:', error);
      }
    };
    reader.readAsText(file);
    
    // Reset input so same file can be selected again
    event.target.value = '';
  };

  // PR tracking
  const getPersonalRecords = () => {
    const prs = {};
    
    workouts.forEach(workout => {
      workout.exercises.forEach(ex => {
        const weight = parseInt(ex.weight) || 0;
        if (!prs[ex.name] || weight > prs[ex.name].weight) {
          prs[ex.name] = {
            weight,
            sets: ex.sets,
            reps: ex.reps,
            date: workout.date
          };
        }
      });
    });
    
    return Object.entries(prs).sort((a, b) => b[1].weight - a[1].weight);
  };

  // Progress chart data
  const getExerciseHistory = (exerciseName) => {
    const history = [];
    
    workouts.forEach(workout => {
      const exercise = workout.exercises.find(ex => ex.name === exerciseName);
      if (exercise) {
        history.push({
          date: workout.date,
          weight: parseInt(exercise.weight) || 0,
          volume: (parseInt(exercise.sets) || 0) * (parseInt(exercise.reps) || 0) * (parseInt(exercise.weight) || 0)
        });
      }
    });
    
    return history.reverse(); // Oldest to newest
  };

  const handleTouchStart = (e, id, type) => {
    setSwipeStart(e.touches[0].clientX);
    setSwipingItem({ id, type });
  };

  const handleTouchMove = (e) => {
    if (!swipingItem) return;
    const diff = e.touches[0].clientX - swipeStart;
    if (diff < -50) {
      e.currentTarget.style.transform = `translateX(${Math.max(diff, -100)}px)`;
    }
  };

  const handleTouchEnd = (e, id, type) => {
    if (!swipingItem) return;
    const diff = e.changedTouches[0].clientX - swipeStart;
    
    if (diff < -80) {
      if (type === 'workout') deleteWorkout(id);
      else if (type === 'photo') deletePhoto(id);
    } else {
      e.currentTarget.style.transform = 'translateX(0)';
    }
    
    setSwipingItem(null);
  };

  // Calculate stats
  const totalWorkouts = workouts.length;
  const totalVolume = workouts.reduce((sum, w) => 
    sum + w.exercises.reduce((exSum, ex) => 
      exSum + (parseInt(ex.sets) || 0) * (parseInt(ex.reps) || 0) * (parseInt(ex.weight) || 0), 0
    ), 0
  );
  
  const exerciseStats = {};
  workouts.forEach(w => {
    w.exercises.forEach(ex => {
      if (!exerciseStats[ex.name]) {
        exerciseStats[ex.name] = { count: 0, maxWeight: 0 };
      }
      exerciseStats[ex.name].count++;
      const weight = parseInt(ex.weight) || 0;
      if (weight > exerciseStats[ex.name].maxWeight) {
        exerciseStats[ex.name].maxWeight = weight;
      }
    });
  });

  const bgClass = darkMode ? 'bg-gradient-to-br from-slate-900 to-slate-800' : 'bg-gradient-to-br from-blue-50 to-indigo-100';
  const cardClass = darkMode ? 'bg-slate-800' : 'bg-white';
  const textClass = darkMode ? 'text-white' : 'text-gray-900';
  const secondaryTextClass = darkMode ? 'text-slate-400' : 'text-gray-600';
  const inputClass = darkMode ? 'bg-slate-600 text-white' : 'bg-gray-100 text-gray-900';
  const buttonClass = darkMode ? 'bg-slate-700 hover:bg-slate-600' : 'bg-gray-200 hover:bg-gray-300';

  return (
    <div className={`min-h-screen ${bgClass} ${textClass}`}>
      <div className="max-w-4xl mx-auto p-4 pb-20">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-1 flex items-center gap-2">
              <Dumbbell className="text-blue-400" size={32} />
              Lifting Tracker
            </h1>
            <p className={secondaryTextClass}>Track your progress</p>
          </div>
          <button
            onClick={toggleDarkMode}
            className={`p-3 rounded-full ${cardClass} shadow-lg`}
          >
            {darkMode ? <Sun size={24} /> : <Moon size={24} />}
          </button>
        </div>

        <div className="flex gap-2 mb-6 overflow-x-auto">
          <button
            onClick={() => setActiveTab('log')}
            className={`flex-1 min-w-20 py-3 px-2 rounded-lg font-semibold transition-all text-sm ${
              activeTab === 'log'
                ? 'bg-blue-500 text-white shadow-lg'
                : `${buttonClass} ${textClass}`
            }`}
          >
            <Calendar className="inline mr-1" size={16} />
            Log
          </button>
          <button
            onClick={() => setActiveTab('guide')}
            className={`flex-1 min-w-20 py-3 px-2 rounded-lg font-semibold transition-all text-sm ${
              activeTab === 'guide'
                ? 'bg-blue-500 text-white shadow-lg'
                : `${buttonClass} ${textClass}`
            }`}
          >
            <Dumbbell className="inline mr-1" size={16} />
            Guide
          </button>
          <button
            onClick={() => setActiveTab('history')}
            className={`flex-1 min-w-20 py-3 px-2 rounded-lg font-semibold transition-all text-sm ${
              activeTab === 'history'
                ? 'bg-blue-500 text-white shadow-lg'
                : `${buttonClass} ${textClass}`
            }`}
          >
            <TrendingUp className="inline mr-1" size={16} />
            History
          </button>
          <button
            onClick={() => setActiveTab('stats')}
            className={`flex-1 min-w-20 py-3 px-2 rounded-lg font-semibold transition-all text-sm ${
              activeTab === 'stats'
                ? 'bg-blue-500 text-white shadow-lg'
                : `${buttonClass} ${textClass}`
            }`}
          >
            <BarChart3 className="inline mr-1" size={16} />
            Stats
          </button>
          <button
            onClick={() => setActiveTab('photos')}
            className={`flex-1 min-w-20 py-3 px-2 rounded-lg font-semibold transition-all text-sm ${
              activeTab === 'photos'
                ? 'bg-blue-500 text-white shadow-lg'
                : `${buttonClass} ${textClass}`
            }`}
          >
            <Camera className="inline mr-1" size={16} />
            Photos
          </button>
        </div>

        {activeTab === 'guide' && (
          <div className="space-y-3">
            <div className={`${cardClass} rounded-lg p-4 shadow-lg`}>
              <h3 className="text-xl font-bold mb-3">Exercise Guide</h3>
              <input
                type="text"
                placeholder="Search exercises..."
                value={guideSearchQuery}
                onChange={(e) => setGuideSearchQuery(e.target.value)}
                className={`w-full p-3 ${inputClass} rounded-lg border-0 text-base`}
              />
            </div>
            
            {filteredGuideExercises.map((exercise) => (
              <button
                key={exercise}
                onClick={() => openGuide(exercise)}
                className={`w-full ${cardClass} rounded-lg p-4 shadow-lg text-left hover:scale-[1.02] transition-transform`}
              >
                <div className="font-semibold text-lg mb-2">{exercise}</div>
                <div className="flex flex-wrap gap-2 mb-2">
                  {exerciseTargets[exercise]?.map((target, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-blue-500 text-white text-xs rounded-full font-medium"
                    >
                      {target}
                    </span>
                  ))}
                </div>
                {exerciseInstructions[exercise] && (
                  <div className={`text-sm ${secondaryTextClass} line-clamp-2`}>
                    {exerciseInstructions[exercise]}
                  </div>
                )}
              </button>
            ))}
            
            {filteredGuideExercises.length === 0 && (
              <div className={`text-center py-12 ${secondaryTextClass}`}>
                <p>No exercises found matching "{guideSearchQuery}"</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'log' && (
          <div>
            {!showAddWorkout ? (
              <div className="space-y-3">
                <button
                  onClick={() => setShowAddWorkout(true)}
                  className="w-full py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold text-lg transition-all shadow-lg"
                >
                  <Plus className="inline mr-2" size={24} />
                  New Workout
                </button>

                <button
                  onClick={() => setShowPresetModal(true)}
                  className={`w-full py-4 ${buttonClass} ${textClass} rounded-lg font-semibold transition-all shadow-lg`}
                >
                  <Dumbbell className="inline mr-2" size={20} />
                  Browse Preset Workouts
                </button>
                
                {workouts.length > 0 && (
                  <button
                    onClick={copyPreviousWorkout}
                    className={`w-full py-4 ${buttonClass} ${textClass} rounded-lg font-semibold transition-all shadow-lg`}
                  >
                    <Copy className="inline mr-2" size={20} />
                    Copy Last Workout
                  </button>
                )}
              </div>
            ) : (
              <div className={`${cardClass} rounded-lg p-4 shadow-xl`}>
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-xl font-bold">New Workout</h2>
                  <button
                    onClick={() => setShowAddWorkout(false)}
                    className={secondaryTextClass}
                  >
                    <X size={24} />
                  </button>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2">Date</label>
                  <input
                    type="date"
                    value={newWorkout.date}
                    onChange={(e) => setNewWorkout({ ...newWorkout, date: e.target.value })}
                    className={`w-full p-3 ${inputClass} rounded-lg border-0`}
                  />
                </div>

                {newWorkout.exercises.map((exercise, idx) => (
                  <div key={idx} className={`${inputClass} rounded-lg p-4 mb-4 relative ${exercise.isSuperset ? 'border-2 border-blue-500' : ''}`}>
                    <div className="flex justify-between items-start mb-3">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">Exercise {idx + 1}</h3>
                        {exercise.isSuperset && (
                          <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full">
                            Superset
                          </span>
                        )}
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => updateExercise(idx, 'isSuperset', !exercise.isSuperset)}
                          className={`p-1 rounded ${exercise.isSuperset ? 'bg-blue-500 text-white' : 'bg-slate-600'}`}
                          title="Toggle superset"
                        >
                          <Zap size={16} />
                        </button>
                        {newWorkout.exercises.length > 1 && (
                          <button
                            onClick={() => removeExercise(idx)}
                            className="text-red-400 hover:text-red-300"
                          >
                            <X size={20} />
                          </button>
                        )}
                      </div>
                    </div>
                    
                    <div className="relative mb-2">
                      <input
                        type="text"
                        placeholder="Exercise name"
                        value={exercise.name}
                        onChange={(e) => updateExercise(idx, 'name', e.target.value)}
                        onFocus={() => setShowExercisePicker(idx)}
                        className={`w-full p-3 ${darkMode ? 'bg-slate-700' : 'bg-white'} rounded text-base`}
                      />
                      
                      {showExercisePicker === idx && exerciseLibrary.length > 0 && (
                        <div className={`absolute z-10 w-full mt-1 ${cardClass} border ${darkMode ? 'border-slate-600' : 'border-gray-300'} rounded-lg shadow-xl max-h-60 overflow-y-auto`}>
                          {filteredExercises(exercise.name).map((ex, i) => (
                            <button
                              key={i}
                              onClick={() => selectExercise(ex, idx)}
                              className={`w-full text-left p-3 ${darkMode ? 'hover:bg-slate-700 border-slate-600' : 'hover:bg-gray-100 border-gray-200'} border-b last:border-b-0`}
                            >
                              {ex}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                    
                    {exercise.name && getLastExerciseStats(exercise.name) && (
                      <div className={`mb-3 p-2 rounded ${darkMode ? 'bg-slate-700' : 'bg-gray-200'}`}>
                        <div className={`text-xs ${secondaryTextClass} mb-1`}>Last session ({getLastExerciseStats(exercise.name).date}):</div>
                        <div className="text-sm font-medium">
                          {getLastExerciseStats(exercise.name).sets} sets × {getLastExerciseStats(exercise.name).reps} reps @ {getLastExerciseStats(exercise.name).weight} lbs
                        </div>
                      </div>
                    )}
                    
                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <label className={`block text-xs ${secondaryTextClass} mb-1`}>Sets</label>
                        <input
                          type="number"
                          placeholder="3"
                          value={exercise.sets}
                          onChange={(e) => updateExercise(idx, 'sets', e.target.value)}
                          className={`w-full p-3 ${darkMode ? 'bg-slate-700' : 'bg-white'} rounded text-base`}
                        />
                      </div>
                      <div>
                        <label className={`block text-xs ${secondaryTextClass} mb-1`}>Reps</label>
                        <input
                          type="number"
                          placeholder="10"
                          value={exercise.reps}
                          onChange={(e) => updateExercise(idx, 'reps', e.target.value)}
                          className={`w-full p-3 ${darkMode ? 'bg-slate-700' : 'bg-white'} rounded text-base`}
                        />
                      </div>
                      <div>
                        <label className={`block text-xs ${secondaryTextClass} mb-1`}>Weight</label>
                        <input
                          type="number"
                          placeholder="135"
                          value={exercise.weight}
                          onChange={(e) => updateExercise(idx, 'weight', e.target.value)}
                          className={`w-full p-3 ${darkMode ? 'bg-slate-700' : 'bg-white'} rounded text-base`}
                        />
                      </div>
                    </div>
                  </div>
                ))}

                <button
                  onClick={addExercise}
                  className={`w-full py-3 ${buttonClass} rounded-lg mb-3 text-base font-medium`}
                >
                  <Plus className="inline mr-2" size={20} />
                  Add Exercise
                </button>

                <div className="mb-4">
                  <label className="block text-sm font-semibold mb-2">Notes (optional)</label>
                  <textarea
                    value={newWorkout.notes}
                    onChange={(e) => setNewWorkout({ ...newWorkout, notes: e.target.value })}
                    placeholder="How did you feel? Any observations?"
                    className={`w-full p-3 ${inputClass} rounded-lg border-0`}
                    rows="3"
                  />
                </div>

                <button
                  onClick={() => setShowSavePresetModal(true)}
                  className={`w-full py-3 ${buttonClass} rounded-lg font-medium mb-2`}
                >
                  Save as Preset
                </button>
                
                <button
                  onClick={saveWorkout}
                  className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold"
                >
                  Save Workout
                </button>
              </div>
            )}
          </div>
        )}

        {activeTab === 'history' && (
          <div className="space-y-4">
            {workouts.length === 0 ? (
              <div className={`text-center py-12 ${secondaryTextClass}`}>
                <TrendingUp size={48} className="mx-auto mb-4 opacity-50" />
                <p>No workouts logged yet</p>
              </div>
            ) : (
              workouts.map((workout) => (
                <div
                  key={workout.id}
                  className={`${cardClass} rounded-lg p-4 shadow-lg transition-transform`}
                  onTouchStart={(e) => handleTouchStart(e, workout.id, 'workout')}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={(e) => handleTouchEnd(e, workout.id, 'workout')}
                >
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-lg font-bold">{workout.date}</h3>
                      <p className={secondaryTextClass}>{workout.exercises.length} exercises</p>
                    </div>
                    <button
                      onClick={() => deleteWorkout(workout.id)}
                      className="text-red-400 hover:text-red-300 md:block hidden"
                    >
                      <X size={20} />
                    </button>
                  </div>
                  {workout.notes && (
                    <p className={`text-sm ${secondaryTextClass} mb-3 italic`}>"{workout.notes}"</p>
                  )}
                  <div className="space-y-2">
                    {workout.exercises.map((exercise, idx) => (
                      <div key={idx} className={`${inputClass} rounded p-3`}>
                        <div className="font-semibold mb-1">{exercise.name}</div>
                        <div className={`text-sm ${secondaryTextClass}`}>
                          {exercise.sets} sets × {exercise.reps} reps @ {exercise.weight} lbs
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            )}
          </div>
        )}

        {activeTab === 'stats' && (
          <div className="space-y-4">
            <div className={`${cardClass} rounded-lg p-6 shadow-lg`}>
              <h3 className="text-xl font-bold mb-4">Overall Stats</h3>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className={`text-3xl font-bold text-blue-400`}>{totalWorkouts}</div>
                  <div className={secondaryTextClass}>Total Workouts</div>
                </div>
                <div>
                  <div className={`text-3xl font-bold text-blue-400`}>
                    {(totalVolume / 1000).toFixed(1)}k
                  </div>
                  <div className={secondaryTextClass}>Total Volume (lbs)</div>
                </div>
              </div>
              
              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => setShowPRModal(true)}
                  className="flex-1 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-semibold"
                >
                  <Award className="inline mr-2" size={20} />
                  View PRs
                </button>
                <button
                  onClick={() => setShowExportModal(true)}
                  className="flex-1 py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold"
                >
                  <Download className="inline mr-2" size={20} />
                  Export
                </button>
              </div>
            </div>

            {Object.keys(exerciseStats).length > 0 && (
              <div className={`${cardClass} rounded-lg p-6 shadow-lg`}>
                <h3 className="text-xl font-bold mb-4">Exercise Progress</h3>
                <div className="space-y-3">
                  {Object.entries(exerciseStats)
                    .sort((a, b) => b[1].maxWeight - a[1].maxWeight)
                    .map(([name, stats]) => (
                      <button
                        key={name}
                        onClick={() => setSelectedExerciseForChart(name)}
                        className={`w-full ${inputClass} rounded-lg p-3 text-left hover:scale-[1.02] transition-transform`}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <div className="font-semibold">{name}</div>
                            <div className={`text-sm ${secondaryTextClass}`}>
                              Done {stats.count} times
                            </div>
                          </div>
                          <div className="text-right">
                            <div className="text-xl font-bold text-blue-400">
                              {stats.maxWeight} lbs
                            </div>
                            <div className={`text-xs ${secondaryTextClass}`}>Max weight</div>
                          </div>
                        </div>
                      </button>
                    ))}
                </div>
              </div>
            )}
          </div>
        )}

        {activeTab === 'photos' && (
          <div>
            <div className="mb-6">
              <label className="block w-full py-4 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold text-center cursor-pointer transition-all shadow-lg">
                <Camera className="inline mr-2" size={24} />
                Upload Progress Photo
                <input
                  type="file"
                  accept="image/*"
                  onChange={handlePhotoUpload}
                  className="hidden"
                />
              </label>
            </div>

            {photos.length === 0 ? (
              <div className={`text-center py-12 ${secondaryTextClass}`}>
                <Camera size={48} className="mx-auto mb-4 opacity-50" />
                <p>No progress photos yet</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                {photos.map((photo) => (
                  <div
                    key={photo.id}
                    className={`${cardClass} rounded-lg overflow-hidden shadow-lg transition-transform`}
                    onTouchStart={(e) => handleTouchStart(e, photo.id, 'photo')}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={(e) => handleTouchEnd(e, photo.id, 'photo')}
                  >
                    <div className="relative">
                      <img
                        src={photo.data}
                        alt="Progress"
                        className="w-full h-48 object-cover"
                      />
                      <button
                        onClick={() => deletePhoto(photo.id)}
                        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-2 md:block hidden"
                      >
                        <X size={16} />
                      </button>
                    </div>
                    <div className="p-3">
                      <p className={`text-sm ${secondaryTextClass}`}>{photo.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {showPresetModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
            <div className={`${cardClass} rounded-lg p-6 max-w-2xl w-full my-8`}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">Preset Workouts</h3>
                <button
                  onClick={() => {
                    setShowPresetModal(false);
                    setSelectedGoals([]);
                  }}
                  className={secondaryTextClass}
                >
                  <X size={24} />
                </button>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold mb-3">Filter by Goals</h4>
                <div className="flex flex-wrap gap-2">
                  {fitnessGoals.map(goal => (
                    <button
                      key={goal}
                      onClick={() => toggleGoal(goal)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedGoals.includes(goal)
                          ? 'bg-blue-500 text-white'
                          : `${buttonClass} ${textClass}`
                      }`}
                    >
                      {goal}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                {getFilteredPresets().map((preset) => (
                  <div key={preset.name} className={`${inputClass} rounded-lg p-4`}>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-lg">{preset.name}</h4>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            preset.isCustom 
                              ? 'bg-purple-500 text-white' 
                              : 'bg-blue-500 text-white'
                          }`}>
                            {preset.isCustom ? 'Custom' : 'Built-in'}
                          </span>
                        </div>
                        <p className={`text-sm ${secondaryTextClass}`}>{preset.description}</p>
                      </div>
                      {preset.isCustom && (
                        <button
                          onClick={() => deleteCustomPreset(preset.name)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <Trash2 size={18} />
                        </button>
                      )}
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-3">
                      {preset.goals.map((goal, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-blue-500 text-white text-xs rounded-full"
                        >
                          {goal}
                        </span>
                      ))}
                    </div>

                    <div className={`text-sm ${secondaryTextClass} mb-3`}>
                      {preset.exercises.length} exercises: {preset.exercises.map(e => e.name).join(', ')}
                    </div>

                    <button
                      onClick={() => loadPresetWorkout(preset.name, preset.isCustom)}
                      className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold"
                    >
                      Use This Workout
                    </button>
                  </div>
                ))}

                {getFilteredPresets().length === 0 && (
                  <div className={`text-center py-8 ${secondaryTextClass}`}>
                    <p>No workouts match your selected goals</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {showSavePresetModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
            <div className={`${cardClass} rounded-lg p-6 max-w-md w-full my-8`}>
              <h3 className="text-xl font-bold mb-4">Save as Preset Workout</h3>
              
              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Preset Name</label>
                <input
                  type="text"
                  placeholder="e.g., My Push Workout"
                  value={presetName}
                  onChange={(e) => setPresetName(e.target.value)}
                  className={`w-full p-3 ${inputClass} rounded-lg border-0`}
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Description (optional)</label>
                <input
                  type="text"
                  placeholder="Brief description of this workout"
                  value={presetDescription}
                  onChange={(e) => setPresetDescription(e.target.value)}
                  className={`w-full p-3 ${inputClass} rounded-lg border-0`}
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-semibold mb-2">Select Goals</label>
                <div className="flex flex-wrap gap-2">
                  {fitnessGoals.map(goal => (
                    <button
                      key={goal}
                      onClick={() => togglePresetGoal(goal)}
                      className={`px-3 py-2 rounded-full text-sm font-medium transition-all ${
                        presetGoals.includes(goal)
                          ? 'bg-blue-500 text-white'
                          : `${buttonClass} ${textClass}`
                      }`}
                    >
                      {goal}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => {
                    setShowSavePresetModal(false);
                    setPresetName('');
                    setPresetDescription('');
                    setPresetGoals([]);
                  }}
                  className={`flex-1 py-3 ${buttonClass} rounded-lg`}
                >
                  Cancel
                </button>
                <button
                  onClick={saveAsPreset}
                  className="flex-1 py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold"
                >
                  Save Preset
                </button>
              </div>
            </div>
          </div>
        )}

        {showGuideModal && selectedExercise && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className={`${cardClass} rounded-lg p-6 max-w-md w-full max-h-[80vh] overflow-y-auto`}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{selectedExercise}</h3>
                <button
                  onClick={() => setShowGuideModal(false)}
                  className={secondaryTextClass}
                >
                  <X size={24} />
                </button>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {exerciseTargets[selectedExercise]?.map((target, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-500 text-white text-sm rounded-full font-medium"
                  >
                    {target}
                  </span>
                ))}
              </div>
              
              <div className={`text-base leading-relaxed mb-6 ${darkMode ? 'text-slate-300' : 'text-gray-700'}`}>
                {exerciseInstructions[selectedExercise] || "Instructions not available for this exercise."}
              </div>
              
              <button
                onClick={() => addExerciseFromGuide(selectedExercise)}
                className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold"
              >
                <Plus className="inline mr-2" size={20} />
                Add to Today's Workout
              </button>
            </div>
          </div>
        )}

        {showPRModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
            <div className={`${cardClass} rounded-lg p-6 max-w-2xl w-full my-8`}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold flex items-center gap-2">
                  <Award className="text-yellow-500" size={28} />
                  Personal Records
                </h3>
                <button
                  onClick={() => setShowPRModal(false)}
                  className={secondaryTextClass}
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-3">
                {getPersonalRecords().map(([name, pr]) => (
                  <div key={name} className={`${inputClass} rounded-lg p-4`}>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-bold text-lg">{name}</div>
                        <div className={`text-sm ${secondaryTextClass}`}>
                          {pr.sets} sets × {pr.reps} reps on {pr.date}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-yellow-500">
                          {pr.weight} lbs
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                {getPersonalRecords().length === 0 && (
                  <div className={`text-center py-8 ${secondaryTextClass}`}>
                    <p>No records yet. Start lifting to set your first PR!</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {showExportModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className={`${cardClass} rounded-lg p-6 max-w-md w-full`}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">Backup & Restore</h3>
                <button
                  onClick={() => setShowExportModal(false)}
                  className={secondaryTextClass}
                >
                  <X size={24} />
                </button>
              </div>

              <p className={`${secondaryTextClass} mb-6`}>
                Export your data for backup or import from a previous backup
              </p>

              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold mb-2">Export Data</h4>
                  <button
                    onClick={() => {
                      exportData();
                      setShowExportModal(false);
                    }}
                    className="w-full py-3 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold mb-2"
                  >
                    <Download className="inline mr-2" size={20} />
                    Export JSON (Full Backup)
                  </button>
                  <button
                    onClick={() => {
                      exportCSV();
                      setShowExportModal(false);
                    }}
                    className="w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-semibold"
                  >
                    <Download className="inline mr-2" size={20} />
                    Export CSV (Spreadsheet)
                  </button>
                </div>

                <div className={`border-t ${darkMode ? 'border-slate-600' : 'border-gray-300'} pt-3 mt-3`}>
                  <h4 className="font-semibold mb-2">Import Data</h4>
                  <label className={`block w-full py-3 ${buttonClass} ${textClass} rounded-lg font-semibold text-center cursor-pointer hover:opacity-80`}>
                    <Plus className="inline mr-2" size={20} />
                    Import from JSON Backup
                    <input
                      type="file"
                      accept=".json"
                      onChange={importData}
                      className="hidden"
                    />
                  </label>
                  <p className={`text-xs ${secondaryTextClass} mt-2`}>
                    Import will merge with existing data (duplicates removed)
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedExerciseForChart && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 overflow-y-auto">
            <div className={`${cardClass} rounded-lg p-6 max-w-2xl w-full my-8`}>
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-2xl font-bold">{selectedExerciseForChart} Progress</h3>
                <button
                  onClick={() => setSelectedExerciseForChart(null)}
                  className={secondaryTextClass}
                >
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-3">
                {getExerciseHistory(selectedExerciseForChart).map((entry, idx) => (
                  <div key={idx} className={`${inputClass} rounded-lg p-3`}>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-semibold">{entry.date}</div>
                        <div className={`text-sm ${secondaryTextClass}`}>
                          Volume: {entry.volume.toLocaleString()} lbs
                        </div>
                      </div>
                      <div className="text-xl font-bold text-blue-400">
                        {entry.weight} lbs
                      </div>
                    </div>
                  </div>
                ))}
                {getExerciseHistory(selectedExerciseForChart).length === 0 && (
                  <div className={`text-center py-8 ${secondaryTextClass}`}>
                    <p>No history for this exercise yet</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LiftingTracker;

