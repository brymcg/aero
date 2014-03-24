namespace :deploy do
  def deploy(env)
    puts "Deploying to #{env}"
    system "TARGET=#{env} bundle exec middleman deploy"
  end

  task :git do
    deploy :git
  end

  task :production do
    deploy :production
  end
end