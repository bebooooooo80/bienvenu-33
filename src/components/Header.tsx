import React, { useState } from 'react';
import { StudentProfile } from '../types';
import { getAllLessons } from '../data/curriculum';
import { speakFrench, stopFrench } from '../utils/speech';
import {
  BookOpen,
  Award,
  CheckCircle2,
  Clock,
  LogOut,
  KeyRound,
  Sparkles,
  Flame,
  Volume2,
  VolumeX,
  MessageCircle,
  Share2,
  HelpCircle
} from 'lucide-react';

interface HeaderProps {
  student: StudentProfile | null;
  currentTab: 'dashboard' | 'roadmap' | 'vocab' | 'errors' | 'exams';
  onSelectTab: (tab: 'dashboard' | 'roadmap' | 'vocab' | 'errors' | 'exams') => void;
  onOpenAuth: () => void;
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  student,
  currentTab,
  onSelectTab,
  onOpenAuth,
  onLogout,
}) => {
  const [audioEnabled, setAudioEnabled] = useState<boolean>(true);
  const totalLessonsCount = getAllLessons().length;
  const completedCount = student?.completedLessons?.length || 0;

  const handleToggleAudio = () => {
    if (audioEnabled) {
      stopFrench();
      setAudioEnabled(false);
    } else {
      setAudioEnabled(true);
      speakFrench('Bienvenue avec Monsieur Saïd Saleh !');
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-slate-200/80 transition-colors shadow-2xs">
      {/* French Flag Tricolor Micro-Ribbon */}
      <div className="french-flag-bar w-full" />

      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20 gap-2">
          
          {/* Zone 1: Brand title & Instructor identity */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0">
            <button
              onClick={() => onSelectTab('dashboard')}
              className="text-right focus:outline-none group cursor-pointer flex items-center gap-2.5 sm:gap-3.5"
            >
              {/* French Flag Mini Badge */}
              <div className="french-flag-badge shrink-0 shadow-xs" title="Drapeau Français">
                <span />
                <span />
                <span />
              </div>

              <div>
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="text-base sm:text-xl font-black tracking-tight text-[#0B1F3A] font-ar group-hover:text-[#0055A4] transition-colors">
                    منصة ميسو سعيد صالح
                  </span>
                  <span className="px-2 py-0.5 bg-[#0055A4]/10 text-[#0055A4] text-[10px] sm:text-[11px] font-black rounded-lg font-fr uppercase tracking-wider border border-[#0055A4]/20">
                    Bienvenu 2
                  </span>
                </div>
                <div className="text-[10px] sm:text-[12px] text-slate-500 font-medium font-ar flex items-center gap-1">
                  <span>2ème Préparatoire · الصف الثاني الإعدادي</span>
                  <span className="text-slate-300 hidden sm:inline">|</span>
                  <span className="text-[#EF4135] font-semibold hidden sm:inline">الفصل الدراسي الأول</span>
                </div>
              </div>
            </button>
          </div>

          {/* Zone 2: Navigation Links for authenticated user */}
          {student && (
            <nav className="hidden lg:flex items-center gap-1 bg-white/70 p-1 rounded-2xl border border-slate-200/60 shadow-2xs">
              <button
                onClick={() => onSelectTab('dashboard')}
                className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  currentTab === 'dashboard'
                    ? 'bg-[#0055A4] text-white shadow-xs'
                    : 'text-slate-700 hover:bg-[#0055A4]/10 hover:text-[#0055A4]'
                }`}
              >
                الرئيسية
              </button>
              <button
                onClick={() => onSelectTab('roadmap')}
                className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  currentTab === 'roadmap'
                    ? 'bg-[#0055A4] text-white shadow-xs'
                    : 'text-slate-700 hover:bg-[#0055A4]/10 hover:text-[#0055A4]'
                }`}
              >
                المنهج والوحدات
              </button>
              <button
                onClick={() => onSelectTab('vocab')}
                className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  currentTab === 'vocab'
                    ? 'bg-[#0055A4] text-white shadow-xs'
                    : 'text-slate-700 hover:bg-[#0055A4]/10 hover:text-[#0055A4]'
                }`}
              >
                بنك المفردات
              </button>
              <button
                onClick={() => onSelectTab('errors')}
                className={`relative px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  currentTab === 'errors'
                    ? 'bg-[#0055A4] text-white shadow-xs'
                    : 'text-slate-700 hover:bg-[#0055A4]/10 hover:text-[#0055A4]'
                }`}
              >
                <span>بنك الأخطاء</span>
                {student.errorBank && student.errorBank.filter(e => !e.resolved).length > 0 && (
                  <span className="mr-1.5 inline-flex items-center justify-center px-1.5 py-0.5 text-[10px] font-bold text-white bg-[#EF4135] rounded-full">
                    {student.errorBank.filter(e => !e.resolved).length}
                  </span>
                )}
              </button>
              <button
                onClick={() => onSelectTab('exams')}
                className={`px-3 py-1.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                  currentTab === 'exams'
                    ? 'bg-[#0055A4] text-white shadow-xs'
                    : 'text-slate-700 hover:bg-[#0055A4]/10 hover:text-[#0055A4]'
                }`}
              >
                الامتحانات الرسمية
              </button>
            </nav>
          )}

          {/* Zone 3: Social Links, Audio Toggle & Student Status */}
          <div className="flex items-center gap-1.5 sm:gap-2.5">
            {/* WhatsApp Direct Link Button */}
            <a
              href="https://wa.me/20XXXXXXXXXX"
              target="_blank"
              rel="noopener noreferrer"
              title="واتساب ميسو سعيد صالح"
              className="p-1.5 sm:p-2 text-emerald-700 hover:text-emerald-800 bg-emerald-50 hover:bg-emerald-100 rounded-xl transition-all border border-emerald-200/80 flex items-center gap-1 shadow-2xs text-xs font-bold"
            >
              <MessageCircle className="w-4 h-4 text-emerald-600" />
              <span className="hidden xl:inline">واتساب</span>
            </a>

            {/* Facebook Page Button */}
            <a
              href="https://facebook.com/XXXXX"
              target="_blank"
              rel="noopener noreferrer"
              title="صفحة ميسو سعيد صالح الرسمية"
              className="p-1.5 sm:p-2 text-[#0055A4] hover:text-[#003d75] bg-blue-50 hover:bg-blue-100 rounded-xl transition-all border border-blue-200/80 flex items-center gap-1 shadow-2xs text-xs font-bold"
            >
              <Share2 className="w-4 h-4 text-[#0055A4]" />
              <span className="hidden xl:inline">فيسبوك</span>
            </a>

            {/* Audio Pronunciation Toggle */}
            <button
              onClick={handleToggleAudio}
              title={audioEnabled ? 'النطق الفرنسي الصوتي مفعل - اضغط للتعطيل' : 'النطق الصوتي معطل - اضغط للتفعيل'}
              className={`p-1.5 sm:p-2 rounded-xl transition-all border flex items-center gap-1 cursor-pointer text-xs font-bold ${
                audioEnabled
                  ? 'bg-amber-50 text-amber-900 border-amber-300 hover:bg-amber-100'
                  : 'bg-slate-100 text-slate-500 border-slate-200'
              }`}
            >
              {audioEnabled ? (
                <>
                  <Volume2 className="w-4 h-4 text-amber-600 animate-pulse" />
                  <span className="hidden md:inline font-mono text-[11px]">صوت فرنسي</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-4 h-4 text-slate-400" />
                  <span className="hidden md:inline text-[11px]">مكتوم</span>
                </>
              )}
            </button>

            {/* Student Status or Auth Button */}
            {student ? (
              <div className="flex items-center gap-1.5 sm:gap-2">
                {/* Completed Lessons Counter & XP */}
                <div className="hidden sm:flex items-center gap-2 bg-white px-2.5 py-1.5 rounded-xl border border-slate-200 shadow-2xs">
                  {/* Daily Streak */}
                  <div className="flex items-center gap-1 text-xs text-orange-600 font-bold" title="أيام التفاعل المتتالية">
                    <Flame className="w-3.5 h-3.5 text-orange-500 fill-orange-500" />
                    <span>{student.dailyStreak || 1}د</span>
                  </div>

                  <span className="text-slate-200">|</span>

                  {/* Lessons Completed */}
                  <div className="flex items-center gap-1 text-xs text-slate-600 font-bold" title="الدروس المنجزة من المنهج">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{completedCount}/{totalLessonsCount}</span>
                  </div>

                  <span className="text-slate-200">|</span>

                  {/* XP Points */}
                  <div className="flex items-center gap-0.5 text-xs text-amber-700 font-bold font-mono" title="نقاط الخبرة XP">
                    <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
                    <span>{student.xp}</span>
                  </div>
                </div>

                {/* Plan Badge */}
                {student.plan === 'trial' ? (
                  <button
                    onClick={onOpenAuth}
                    className="hidden md:flex items-center gap-1 px-2.5 py-1 bg-amber-50 border border-amber-200 rounded-xl text-[11px] font-bold text-amber-900 hover:bg-amber-100 transition-colors cursor-pointer"
                  >
                    <Clock className="w-3.5 h-3.5 text-amber-700" />
                    <span>تجربة: {student.remainingHours}س</span>
                  </button>
                ) : (
                  <div className="hidden md:flex items-center gap-1 px-2.5 py-1 bg-[#0055A4]/10 border border-[#0055A4]/20 rounded-xl text-[11px] font-bold text-[#0055A4]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>النسخة الكاملة</span>
                  </div>
                )}

                {/* User avatar & logout */}
                <div className="flex items-center gap-1.5 bg-white p-1 rounded-xl border border-slate-200 shadow-2xs">
                  <div className="w-7 h-7 rounded-lg bg-[#0055A4] text-white flex items-center justify-center text-xs font-bold shrink-0">
                    {student.studentName.charAt(0)}
                  </div>
                  <span className="text-xs font-bold text-slate-800 max-w-[85px] truncate hidden sm:inline px-1">
                    {student.studentName}
                  </span>
                  <button
                    onClick={onLogout}
                    title="تسجيل الخروج"
                    className="p-1.5 text-slate-400 hover:text-[#EF4135] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer"
                  >
                    <LogOut className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ) : (
              <button
                onClick={onOpenAuth}
                className="px-3 sm:px-4 py-2 text-xs font-bold text-white bg-[#0055A4] hover:bg-[#004080] rounded-xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <KeyRound className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">تسجيل الدخول / التفعيل</span>
                <span className="sm:hidden">دخول</span>
              </button>
            )}
          </div>
        </div>

        {/* Mobile Tab Navigation */}
        {student && (
          <div className="flex lg:hidden items-center justify-around py-2 border-t border-slate-200/80 text-xs font-bold">
            <button
              onClick={() => onSelectTab('dashboard')}
              className={`py-1 px-2 ${currentTab === 'dashboard' ? 'text-[#0055A4] border-b-2 border-[#0055A4]' : 'text-slate-500'}`}
            >
              الرئيسية
            </button>
            <button
              onClick={() => onSelectTab('roadmap')}
              className={`py-1 px-2 ${currentTab === 'roadmap' ? 'text-[#0055A4] border-b-2 border-[#0055A4]' : 'text-slate-500'}`}
            >
              المنهج
            </button>
            <button
              onClick={() => onSelectTab('vocab')}
              className={`py-1 px-2 ${currentTab === 'vocab' ? 'text-[#0055A4] border-b-2 border-[#0055A4]' : 'text-slate-500'}`}
            >
              المفردات
            </button>
            <button
              onClick={() => onSelectTab('errors')}
              className={`py-1 px-2 ${currentTab === 'errors' ? 'text-[#0055A4] border-b-2 border-[#0055A4]' : 'text-slate-500'}`}
            >
              الأخطاء
            </button>
            <button
              onClick={() => onSelectTab('exams')}
              className={`py-1 px-2 ${currentTab === 'exams' ? 'text-[#0055A4] border-b-2 border-[#0055A4]' : 'text-slate-500'}`}
            >
              الامتحانات
            </button>
          </div>
        )}
      </div>
    </header>
  );
};
