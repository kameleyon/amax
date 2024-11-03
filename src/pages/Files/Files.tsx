import React, { useState } from 'react';
import { 
  Search,
  Filter,
  Download,
  Share2,
  Trash2,
  Edit2,
  Star,
  Archive,
  Play,
  Pause,
  Folder,
  SortAsc,
  SortDesc
} from 'lucide-react';
import { Container } from '@/components/Layout/Container';
import { Card } from '@/components/common/Card';
import { Input } from '@/components/common/Input';
import { Button } from '@/components/common/Button';
import { CustomDropdown } from '@/components/common/CustomDropdown/CustomDropdown';
import {
  FilesHeader,
  HeaderTitle,
  SearchSection,
  FilterSection,
  FileList,
  FileItem,
  FileInfo,
  FileActions,
  FileMetadata,
  IconButton,
  NoResults,
  SortButton
} from './Files.styles';

interface AudioFile {
  id: string;
  title: string;
  date: string;
  category: string;
  tone: string;
  voice: string;
  duration: string;
  isFavorite: boolean;
  isPlaying?: boolean;
}

const CATEGORIES = [
  { value: 'all', label: 'All Categories' },
  { value: 'podcast', label: 'Podcast' },
  { value: 'story', label: 'Story' },
  { value: 'article', label: 'Article' }
];

const TONES = [
  { value: 'all', label: 'All Tones' },
  { value: 'professional', label: 'Professional' },
  { value: 'casual', label: 'Casual' },
  { value: 'friendly', label: 'Friendly' }
];

export const Files = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTone, setSelectedTone] = useState('all');
  const [showFavorites, setShowFavorites] = useState(false);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');
  const [files, setFiles] = useState<AudioFile[]>([
    {
      id: '1',
      title: 'Weekly Podcast Episode 1',
      date: '2023-11-03',
      category: 'podcast',
      tone: 'professional',
      voice: 'en-US-Neural2-A',
      duration: '15:30',
      isFavorite: true
    },
    {
      id: '2',
      title: 'Marketing Blog Post',
      date: '2023-11-02',
      category: 'article',
      tone: 'casual',
      voice: 'en-US-Neural2-B',
      duration: '5:45',
      isFavorite: false
    }
  ]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  const toggleFavorite = (id: string) => {
    setFiles(files.map(file => 
      file.id === id ? { ...file, isFavorite: !file.isFavorite } : file
    ));
  };

  const togglePlay = (id: string) => {
    setFiles(files.map(file => 
      file.id === id ? { ...file, isPlaying: !file.isPlaying } : { ...file, isPlaying: false }
    ));
  };

  const handleDelete = (id: string) => {
    if (window.confirm('Are you sure you want to delete this file?')) {
      setFiles(files.filter(file => file.id !== id));
    }
  };

  const filteredFiles = files
    .filter(file => {
      const matchesSearch = file.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || file.category === selectedCategory;
      const matchesTone = selectedTone === 'all' || file.tone === selectedTone;
      const matchesFavorites = !showFavorites || file.isFavorite;
      return matchesSearch && matchesCategory && matchesTone && matchesFavorites;
    })
    .sort((a, b) => {
      const dateA = new Date(a.date).getTime();
      const dateB = new Date(b.date).getTime();
      return sortDirection === 'asc' ? dateA - dateB : dateB - dateA;
    });

  return (
    <Container>
      <Card>
        <FilesHeader>
          <HeaderTitle>
            <Folder size={24} />
            <h2>Files</h2>
          </HeaderTitle>
          
          <SearchSection>
            <Input
              placeholder="Search files..."
              value={searchTerm}
              onChange={handleSearch}
              icon={<Search size={18} />}
            />
          </SearchSection>

          <FilterSection>
            <CustomDropdown
              options={CATEGORIES}
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              placeholder="Category"
            />
            <CustomDropdown
              options={TONES}
              value={selectedTone}
              onChange={(e) => setSelectedTone(e.target.value)}
              placeholder="Tone"
            />
            <Button
              variant={showFavorites ? 'primary' : 'outline'}
              onClick={() => setShowFavorites(!showFavorites)}
            >
              <Star size={18} />
              Favorites
            </Button>
            <SortButton
              onClick={() => setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc')}
              title={`Sort ${sortDirection === 'asc' ? 'descending' : 'ascending'}`}
            >
              {sortDirection === 'asc' ? <SortAsc size={18} /> : <SortDesc size={18} />}
            </SortButton>
          </FilterSection>
        </FilesHeader>

        {filteredFiles.length > 0 ? (
          <FileList>
            {filteredFiles.map(file => (
              <FileItem key={file.id}>
                <FileInfo>
                  <h3>{file.title}</h3>
                  <FileMetadata>
                    <span>{file.date}</span>
                    <span>•</span>
                    <span>{file.category}</span>
                    <span>•</span>
                    <span>{file.tone}</span>
                    <span>•</span>
                    <span>{file.duration}</span>
                  </FileMetadata>
                </FileInfo>
                <FileActions>
                  <IconButton
                    onClick={() => togglePlay(file.id)}
                    title={file.isPlaying ? 'Pause' : 'Play'}
                  >
                    {file.isPlaying ? <Pause size={18} /> : <Play size={18} />}
                  </IconButton>
                  <IconButton
                    onClick={() => toggleFavorite(file.id)}
                    title={file.isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                    $active={file.isFavorite}
                  >
                    <Star size={18} />
                  </IconButton>
                  <IconButton title="Download">
                    <Download size={18} />
                  </IconButton>
                  <IconButton title="Share">
                    <Share2 size={18} />
                  </IconButton>
                  <IconButton title="Archive">
                    <Archive size={18} />
                  </IconButton>
                  <IconButton title="Rename">
                    <Edit2 size={18} />
                  </IconButton>
                  <IconButton
                    onClick={() => handleDelete(file.id)}
                    title="Delete"
                    $danger
                  >
                    <Trash2 size={18} />
                  </IconButton>
                </FileActions>
              </FileItem>
            ))}
          </FileList>
        ) : (
          <NoResults>
            <Filter size={48} />
            <h3>No files found</h3>
            <p>Try adjusting your search or filters</p>
          </NoResults>
        )}
      </Card>
    </Container>
  );
};