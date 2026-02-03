# Essential Terminal Commands

*Last updated: January 2, 2026*

A comprehensive reference of essential terminal commands every developer should know.

- [Essential Terminal Commands](#essential-terminal-commands)
  - [File System Navigation](#file-system-navigation)
  - [File Operations](#file-operations)
  - [Viewing Files](#viewing-files)
  - [Searching and Finding](#searching-and-finding)
  - [File Permissions](#file-permissions)
  - [Process Management](#process-management)
  - [System Information](#system-information)
  - [Network Commands](#network-commands)
  - [Text Processing](#text-processing)
  - [Compression](#compression)
  - [Redirection and Pipes](#redirection-and-pipes)
  - [Shortcuts](#shortcuts)
  - [Pro Tips](#pro-tips)

## File System Navigation

```bash
# Print working directory
pwd

# List files
ls              # Basic list
ls -l           # Long format with details
ls -la          # Include hidden files
ls -lh          # Human-readable sizes
ls -lt          # Sort by modification time

# Change directory
cd /path        # Absolute path
cd relative     # Relative path
cd ~            # Home directory
cd -            # Previous directory
cd ..           # Parent directory

# Create directory
mkdir dirname           # Single directory
mkdir -p path/to/dir   # Create parent directories
```

## File Operations

```bash
# Copy
cp source dest              # Copy file
cp -r source dest          # Copy directory recursively
cp -i source dest          # Interactive (confirm overwrite)

# Move/Rename
mv source dest             # Move or rename
mv -i source dest          # Interactive

# Remove
rm file                    # Remove file
rm -r directory           # Remove directory recursively
rm -f file                # Force remove (no confirmation)
rm -rf directory          # Force remove directory (DANGEROUS!)

# Create empty file
touch filename

# Create symbolic link
ln -s target linkname
```

## Viewing Files

```bash
# Display entire file
cat file

# Display with line numbers
cat -n file

# Page through file
less file              # Use arrows, space, q to quit
more file              # Simpler pager

# Display first/last lines
head file              # First 10 lines
head -n 20 file       # First 20 lines
tail file              # Last 10 lines
tail -n 20 file       # Last 20 lines
tail -f file          # Follow file (real-time updates)
```

## Searching and Finding

```bash
# Find files
find /path -name "*.txt"           # Find by name
find /path -type f -mtime -7       # Modified in last 7 days
find /path -size +100M             # Larger than 100MB

# Search file contents
grep "pattern" file                # Search in file
grep -r "pattern" directory        # Recursive search
grep -i "pattern" file            # Case-insensitive
grep -v "pattern" file            # Invert match
grep -n "pattern" file            # Show line numbers

# Which command
which command          # Show command location
whereis command        # Show binary, source, and man page
```

## File Permissions

```bash
# View permissions
ls -l

# Change permissions
chmod 755 file         # rwxr-xr-x
chmod +x file          # Add execute permission
chmod -w file          # Remove write permission
chmod u+x file         # Add execute for user only

# Change owner
chown user:group file
chown -R user:group directory  # Recursive
```

## Process Management

```bash
# List processes
ps                     # Current shell processes
ps aux                 # All processes
ps aux | grep name     # Find specific process

# Process tree
pstree

# Interactive process viewer
top                    # Basic
htop                   # Enhanced (needs installation)

# Kill processes
kill PID               # Terminate process
kill -9 PID           # Force kill
killall name          # Kill by name
pkill pattern         # Kill by pattern
```

## System Information

```bash
# Disk usage
df -h                  # Disk space
du -sh directory       # Directory size
du -h --max-depth=1    # Size of subdirectories

# Memory usage
free -h

# System information
uname -a               # System info
hostname              # Computer name
uptime                # System uptime
whoami                # Current user
```

## Network Commands

```bash
# Network interfaces
ifconfig              # Show network interfaces (older)
ip addr               # Show IP addresses (newer)

# Network connections
netstat -tuln         # Active connections
ss -tuln              # Socket statistics (newer)

# Ping and trace
ping hostname
traceroute hostname

# Download files
wget URL
curl -O URL

# DNS lookup
nslookup domain
dig domain
```

## Text Processing

```bash
# Word count
wc file               # Lines, words, characters
wc -l file            # Count lines only

# Sort and unique
sort file             # Sort lines
sort -r file          # Reverse sort
uniq file             # Remove duplicates
sort file | uniq      # Sort and remove duplicates

# Cut and paste
cut -d',' -f1 file    # Extract first column (CSV)
paste file1 file2     # Merge files side by side

# Stream editor
sed 's/old/new/' file          # Replace first occurrence
sed 's/old/new/g' file         # Replace all occurrences
sed -i 's/old/new/g' file      # Edit file in-place
```

## Compression

```bash
# Tar archives
tar -czf archive.tar.gz files   # Create gzip archive
tar -xzf archive.tar.gz         # Extract gzip archive
tar -tf archive.tar.gz          # List contents

# Zip files
zip archive.zip files
unzip archive.zip
unzip -l archive.zip            # List contents

# Gzip
gzip file              # Compress (removes original)
gunzip file.gz         # Decompress
```

## Redirection and Pipes

```bash
# Output redirection
command > file         # Overwrite file
command >> file        # Append to file
command 2> file        # Redirect errors
command &> file        # Redirect all output

# Input redirection
command < file         # Read from file

# Pipes
command1 | command2    # Pipe output to next command
command | tee file     # Output to both screen and file
```

## Shortcuts

```bash
# Command line editing
Ctrl + A               # Beginning of line
Ctrl + E               # End of line
Ctrl + K               # Cut to end of line
Ctrl + U               # Cut to beginning of line
Ctrl + W               # Cut previous word
Ctrl + Y               # Paste

# History
Ctrl + R               # Reverse search history
!!                     # Repeat last command
!$                     # Last argument of previous command
history                # Show command history

# Job control
Ctrl + Z               # Suspend current process
bg                     # Resume in background
fg                     # Resume in foreground
jobs                   # List background jobs
```

## Pro Tips

1. Use `man command` to read the manual for any command
2. Tab completion is your friend - use it liberally
3. Use `history | grep keyword` to find previously used commands
4. Create aliases for frequently used commands
5. Learn regular expressions for powerful text matching

Practice these commands regularly and they'll become second nature!
